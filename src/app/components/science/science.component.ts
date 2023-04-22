import {Component, OnInit} from '@angular/core';
import {NewsService} from "../../services/news.service";

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent  implements OnInit {
  listNews: any[] = [];

  constructor(private _newsService: NewsService) {
  }

  ngOnInit(): void {
    this.searchScienceNews();
  }

  searchScienceNews() {
    this.listNews = [];
    this._newsService.getNewsScience("ar").subscribe(data => {
      this.listNews = data.articles;
    }, error => {
      console.log(error);
    });
  }

}
