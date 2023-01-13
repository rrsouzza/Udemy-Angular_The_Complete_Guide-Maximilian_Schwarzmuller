import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { User } from './user.model';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  user: BehaviorSubject<User> = new BehaviorSubject<User>(new User('', '', '', new Date()));
  nullUser: User = new User('', '', '', new Date());
  tokenExpirationTimer!: any;

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCcCPvUFGPzNdNlg-YeO_VeULiSFPfUNAM', {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.handlerError),
        tap((resData) => {
          this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCcCPvUFGPzNdNlg-YeO_VeULiSFPfUNAM', {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.handlerError),
        tap((resData) => {
          this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        })
      );
  }

  autoLogin() {
    const isThereStoredData = localStorage.getItem('userData');

    if (isThereStoredData) {
      const userData: any = JSON.parse(isThereStoredData) || '';
      const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));

      if (loadedUser.token) {
        this.user.next(loadedUser);
        const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
        this.autoLogout(expirationDuration);
      }
    } else {
      return;
    }
  }

  logout() {
    this.user.next(this.nullUser);
    this.router.navigate(['/auth']);
    clearTimeout(this.tokenExpirationTimer);
    localStorage.removeItem('userData');
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);

    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handlerError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }

    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email already exists!';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist!';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct!';
        break;
      default:
        errorMessage = 'An unknown error occured!';
    }
    return throwError(errorMessage);
  }
}
