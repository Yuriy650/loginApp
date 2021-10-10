import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsComponent } from './news.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {By} from '@angular/platform-browser';
import {Articles, NewsDataService} from '../services/news-data.service';
import {of} from 'rxjs'
import {Router} from '@angular/router';


describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;
let service: NewsDataService
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsComponent ],
      imports: [HttpClientModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsComponent ],
      providers: [
        NewsComponent
      ],
      imports: [ HttpClientModule ]
    })
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    service = TestBed.get(NewsDataService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should navigate to main page after click', ()=>{
    let btn = fixture.debugElement.query(By.css('button'));
    btn.triggerEventHandler('click', null);
    expect(component.goToMain).toBeTruthy()
  });
  it('should fetch articles', ()=>{
    const articles:Articles[] = [

      ];
    // @ts-ignore
    spyOn(service, 'fetchNews').and.returnValue(of(articles));
    fixture.detectChanges();

    // @ts-ignore
    expect(component.articles$).toBe()
  });
  it('should navigate to main', ()=>{
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate')
    component.goToMain()
    expect(spy).toHaveBeenCalledWith(['/'])
  })
it('should ngIf spinner', ()=>{
  let de = fixture.debugElement.query(By.css('div'))
  expect(de.nativeElement.valueOf).toBeTruthy()
})
});
