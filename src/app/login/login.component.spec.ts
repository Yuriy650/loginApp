import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [HttpClientModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  })
  it('should create form with 2 controls', ()=>{
    expect(component.form.contains('password')).toBe(true);
    expect(component.form.contains('email')).toBe(true);
  });
  it('should mark password as invalid if value is null', ()=>{
    const control = component.form.get('password');
    control?.setValue('');
    expect(control?.invalid).toBeTruthy()
  });
  it('should mark email as invalid if value is empty', ()=>{
    const control = component.form.get('email');
    control?.setValue('');
    expect(control?.invalid).toBeTruthy()
  })
});
