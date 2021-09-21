import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsModule} from './news/news.module';
const routes: Routes = [
  {path: 'home', loadChildren: './home/home.module#HomeModule'},
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  {path: 'news', loadChildren: () => NewsModule},
  {path: 'profile', loadChildren: './profile/profile.module#ProfileModule'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
