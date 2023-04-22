import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  API_KEY: string = '596e7e6885ab4c23be989320860ee6943';

  constructor(private http: HttpClient) {
  }

  getNewsFilter(params: any): Observable<any> {
    const URL = 'https://newsapi.org/v2/top-headlines?country=' + params.country + '&category=' + params.category + '&apiKey=' + this.API_KEY;
    return this.http.get(URL);
  }

  getNewsBusiness(country: string): Observable<any> {
    const URL = 'https://newsapi.org/v2/top-headlines?country=' + country + '&category=business&apiKey=' + this.API_KEY;
    return this.http.get(URL);
  }

  getNewsEntertainment(country: string): Observable<any> {
    const URL = 'https://newsapi.org/v2/top-headlines?country=' + country + '&category=entertainment&apiKey=' + this.API_KEY;
    return this.http.get(URL);
  }

  getNewsScience(country: string): Observable<any> {
    const URL = 'https://newsapi.org/v2/top-headlines?country=' + country + '&category=science&apiKey=' + this.API_KEY;
    return this.http.get(URL);
  }

  getNewsSports(country: string): Observable<any> {
    const URL = 'https://newsapi.org/v2/top-headlines?country=' + country + '&category=sports&apiKey=' + this.API_KEY;
    return this.http.get(URL);
  }

}
