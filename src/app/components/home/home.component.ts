import {Component} from '@angular/core';
import {NewsService} from "../../services/news.service";

@Component({
  selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isLoading = false;
  listNews: any[] = [];

  constructor(private _newsService: NewsService) {
  }

  searchNews(p: any) {
    this.isLoading = true;
    this.listNews = [];

    setTimeout(() => {
      this._newsService.getNewsFilter(p).subscribe(data => {
        console.log(data);
        this.isLoading = false;
        this.listNews = data.articles;
      }, error => {
        console.log(error);
        this.isLoading = true;
      });
    }, 1000);
  }
}
