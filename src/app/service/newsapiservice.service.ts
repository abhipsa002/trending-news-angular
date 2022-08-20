import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(
    private _http:HttpClient
  ) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=4ceb3eaa537c4cb8a39c165c6f2579d3"
  techNewsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=4ceb3eaa537c4cb8a39c165c6f2579d3"
  businessNewsApiUrl =  "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4ceb3eaa537c4cb8a39c165c6f2579d3"
  sportsNewsApiUrl =  "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=4ceb3eaa537c4cb8a39c165c6f2579d3"

  topHeading():Observable<any>{
    return this._http.get(this.newsApiUrl)
  }

  techNews():Observable<any>{
    return this._http.get(this.techNewsApiUrl)
  }

  businessNews():Observable<any>{
    return this._http.get(this.businessNewsApiUrl)
  }

  sportsNews():Observable<any>{
    return this._http.get(this.sportsNewsApiUrl)
  }
}
