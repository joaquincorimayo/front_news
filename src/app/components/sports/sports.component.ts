import {Component, OnInit} from '@angular/core';
import {NewsService} from "../../services/news.service";

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent  implements OnInit {
  listNews: any[] = [];

  constructor(private _newsService: NewsService) {
  }

  ngOnInit(): void {
    this.searchSportsNews();
  }

  searchSportsNews() {
    this.listNews = [];
    this._newsService.getNewsSports("ar").subscribe(data => {
      this.listNews = data.articles;
    }, error => {
      console.log(error);
    });
  }
}
