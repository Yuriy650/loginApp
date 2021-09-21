import {Component, Input, OnInit} from '@angular/core';
import {Articles, NewsDataService} from '../services/newsData.service';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})

export class NewsComponent implements OnInit {
  articles$: Observable<Articles[]>;
  spinnerToggle = true;
   constructor(public newsDataService: NewsDataService,
               private router: Router) {

  }

  ngOnInit(): void {
     this.getNews()
  }
  getNews() {
    this.newsDataService.fetchNews()
      .subscribe(
        response => {
          this.articles$ = of(response.articles);
          this.spinnerToggle = false
        }
      )
  }

  goToMain() {
    this.router.navigate(['/'])
  }
}
