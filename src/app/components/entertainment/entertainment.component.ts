import {Component, OnInit} from '@angular/core';
import {NewsService} from "../../services/news.service";

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {
  listNews: any[] = [];

  constructor(private _newsService: NewsService) {
  }

  ngOnInit(): void {
    this.searchEntertainmentNews();
  }

  searchEntertainmentNews() {
    this.listNews = [];
    this._newsService.getNewsEntertainment("ar").subscribe(data => {
      this.listNews = data.articles;
    }, error => {
      console.log(error);
    });
  }
}
