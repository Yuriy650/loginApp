import {AuthService} from './auth.service';

import {User} from '../interfaces';
import {TestBed} from '@angular/core/testing';
import createSpy = jasmine.createSpy;
import createSpyObj = jasmine.createSpyObj;
import { of } from 'rxjs';

describe('AuthService', ()=>{

  let httpClientSpy: {post: jasmine.Spy};
  let authService: AuthService;

  beforeEach(()=>{
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    authService = new AuthService(httpClientSpy as any)
  })

  it('should called post request', (done: DoneFn)=>{
    const fakeUser: User = {
      email: 'info@gmail.com',
      password: '111111'
    };
    httpClientSpy.post.and.callFake(()=>fakeUser)
    done()
    expect(httpClientSpy.post.calls.count()).toBe(0)
  });


})
