import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {User} from '../interfaces';
import {Observable, Subject, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class AuthService {
  KEY = 'AIzaSyBHCSIyjyPCByVo6qKkGuNq9V-6h7M2Aag';
  public error$: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) {

  }

  get token(): string | null {
    // @ts-ignore
    const expDate = new Date(localStorage.getItem('firebase-token-exp-date'));
    if (new Date() > expDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('firebase-token');
  }

  public isAuth = false;

  handleError(error: HttpErrorResponse) {
    const {message} = error.error.error;
    switch (message) {
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Email does not exist');
        break;
      case 'INVALID_PASSWORD':
        this.error$.next('Incorrect password');
        break;
      case 'INVALID_EMAIL':
        this.error$.next('Wrong email address');
        break;
    }
    return throwError(error);
  }

  login(user: User): Observable<any> {
    user.returnSecureToken = true;
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.KEY}`, user)
      .pipe(
        tap(this.setToken),
        // @ts-ignore
        catchError<any>(this.handleError.bind(this))
      );
  }

  logout() {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  // @ts-ignore
  setToken(response: any) {
    if (response) {
      const expiresDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
      localStorage.setItem('firebase-token', response.idToken);
      localStorage.setItem('firebase-token-exp-date', expiresDate.toString());
    } else {
      localStorage.clear();
    }
  }
}
