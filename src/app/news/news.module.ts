import {NgModule} from '@angular/core';
import {NewsComponent} from './news.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    NewsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: NewsComponent},
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class NewsModule{

}
