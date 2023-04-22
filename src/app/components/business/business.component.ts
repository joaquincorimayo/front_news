import {Component, OnInit} from '@angular/core';
import {NewsService} from "../../services/news.service";

@Component({
  selector: 'app-business', templateUrl: './business.component.html', styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  listNews: any[] = [];

  constructor(private _newsService: NewsService) {
  }

  ngOnInit(): void {
    this.searchBusinessNews();
  }

  searchBusinessNews() {
    this.listNews = [];
    this._newsService.getNewsBusiness("ar").subscribe(data => {
      this.listNews = data.articles;
    }, error => {
      console.log(error);
    });
  }


}
