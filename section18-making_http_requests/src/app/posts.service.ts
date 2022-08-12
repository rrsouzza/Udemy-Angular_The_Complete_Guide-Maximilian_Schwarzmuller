import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private http: HttpClient) {}

  error = new Subject<string>();

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    this.http
      .post<{ name: string }>('https://angular-maxschwartz-default-rtdb.firebaseio.com/posts.json', postData, {
        observe: 'response', // Allows to get both body and headers as a json object. That way we can easily access both informations.
      })
      .subscribe(
        (responseData) => {
          console.log(responseData);
        },
        (error) => {
          this.error.next(error.message);
        }
      );
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');

    return this.http
      .get<{ [key: string]: Post }>('https://angular-maxschwartz-default-rtdb.firebaseio.com/posts.json', {
        headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
        // params: new HttpParams().set('print', 'pretty'),
        params: searchParams,
        responseType: 'json', // Standard
      })
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            // eslint-disable-next-line no-prototype-builtins
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError((errorRes) => {
          // Send to analytics server or something
          return throwError(errorRes);
        })
      );
  }

  deletePosts() {
    return this.http
      .delete('https://angular-maxschwartz-default-rtdb.firebaseio.com/posts.json', {
        observe: 'events',
        responseType: 'text',
      })
      .pipe(
        tap((event) => {
          console.log(event);
          if (event.type === HttpEventType.Sent) {
            // ...
          }
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        })
      );
  }
}
