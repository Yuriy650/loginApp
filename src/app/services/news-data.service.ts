import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from 'rxjs';


interface Source {
  id: number;
  name: string
}
export interface Articles {
source: Source;
author: string;
title: string;
description: string;
url: string;
urlToImage: string;
publishedAt: string;
content: string
}
export interface NewsData {
  status: string;
  totalResults: number;
  articles: Articles[];

}
@Injectable({providedIn: 'root'})

export class NewsDataService {
  // @ts-ignore
  key = 'dfb4469421e54463aefc195bf0e5c86c';
  constructor(private http: HttpClient) {
  }
  fetchNews(): Observable<NewsData> {
    return this.http.get<NewsData>(`https://newsapi.org/v2/everything?q=apple&from=2021-09-18&to=2021-09-18&sortBy=popularity&apiKey=${this.key}`)
  }

}
