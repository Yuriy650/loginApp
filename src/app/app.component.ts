import {Component, OnInit} from '@angular/core';
import {Articles, NewsDataService} from './services/newsData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'loginapp';
  articles: Articles[]=[]
  constructor(private newsDataService: NewsDataService) {
  }
  ngOnInit() {

  }


}
