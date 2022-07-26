import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import {IPost} from './interface/ipost';
import { environment } from 'src/environments/environment';
import { CacheService } from './app.cache';

const httpOptions : any    = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {
private apiUrl = environment.apiPostUrl;
  itemForSerivce: Observable<IPost[]>=new Observable<IPost[]>();

  constructor(private http:HttpClient, private appCache: CacheService) { }

  getPosts():Observable<IPost[]> {
    let url = this.apiUrl + '/posts';
    console.log("i am using the new caching")
    const res = this.appCache.httpGetWithCacheGenericNewTry(url,"",this.itemForSerivce);
    return res;
  }

}
