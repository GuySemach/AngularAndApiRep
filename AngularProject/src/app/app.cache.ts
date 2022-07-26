import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })

export class CacheService {
    private apiUrl = environment.apiPostUrl;
  
    cache?: DictionaryFinonex[] = [];

    constructor(private http:HttpClient) { }

    httpGetWithCacheGenericNewTry(url: string, param: string, T: any): Observable<typeof T | undefined> {
        const urlReq = url + param;
        console.log(this.cache?.find(data => data.key == url)?.key);
        let first = this.cache?.find((obj) => {
            return obj.key === urlReq;
          });
        if (!first) {
          console.log("did not find the request in cache ... will use url: " + urlReq);
          console.log(this.cache);
          this.cache?.push({key: url, value: this.http.get(urlReq).pipe(
            map((value: typeof T) => {
              return value?.map((item:typeof T) => ({
                ...item,
                requestUrl: urlReq,
                processed: new Date().toISOString(),
              }));
            }),
            shareReplay(1)
          )}
          );
          console.log(this.cache?.length);
          first = this.cache?.find((obj) => {
            return obj.key === urlReq;
          });
        } 
        return first!.value!;
      }
}

interface DictionaryFinonex {
    key: string,
    value?: Observable<any>
}