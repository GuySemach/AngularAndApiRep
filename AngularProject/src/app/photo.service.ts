import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IPhoto } from './interface/iphoto';
import { environment } from 'src/environments/environment';
import { CacheService } from './app.cache';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private apiUrl = environment.apiPostUrl;
  itemForSerivce: Observable<IPhoto[]>=new Observable<IPhoto[]>();

  constructor(private http:HttpClient, private appCache: CacheService) { }

  getPhotos():Observable<IPhoto[]> {
    let url = this.apiUrl + "/gallery";
    console.log("i am using the new caching")
    const res = this.appCache.httpGetWithCacheGenericNewTry(url,"",this.itemForSerivce);
    return res;
  }

  getAlbumById(albumId: number):Observable<IPhoto[]> {
    let url = this.apiUrl + '/album/' + albumId;
    console.log("i am using the new caching")
    const res = this.appCache.httpGetWithCacheGenericNewTry(url,"",this.itemForSerivce);
    return res;
  }
}