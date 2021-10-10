import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {By} from '@angular/platform-browser';


describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let h2: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      imports: [HttpClientModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    h2 = fixture.nativeElement.querySelector('h2')
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should logout profile', ()=>{
    let btn = fixture.debugElement.query(By.css('button'));
    btn.triggerEventHandler('click', null);
    expect(component.handleLogout).toBeTruthy()
  });
  it('should display original title after detectChange', ()=>{
    expect(h2.textContent).toContain(component.profileTitle)
  });
  it('should display a different test title', () => {
    component.profileTitle = 'Test';
    fixture.detectChanges();
    expect(h2.textContent).toContain('Test');
  });
});
