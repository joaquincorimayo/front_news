import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {
  }

  getNews(params: any): Observable<any> {
    const URL = 'https://newsapi.org/v2/top-headlines?country=' + params.country + '&category=' + params.category + '&apiKey=596e7e6885ab4c23be989320860ee6943';
    return this.http.get(URL);
  }
}
