import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType
} from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostsService
{
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    this.http
      .post<{ name: string }>(
        'https://angular-http-78bd8-default-rtdb.firebaseio.com/posts.json',
        postData,
        {
          observe: 'response'
        }
      )
      .subscribe(
        responseData => {
          console.log(responseData);
        },
        error => {
          this.error.next(error.message);
        }
      );
  }

  fetchPosts() {
    //Passing some extra parameter
    let searchParams = new HttpParams();
    //Its just displays response in pretyy way in network section of developer tools
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    return this.http
      .get<{ [key: string]: Post }>(
        'https://angular-http-78bd8-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
          params: searchParams,
          responseType: 'json'
        }
      )
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError(errorRes => {
          // Send to analytics server
          return throwError(errorRes);
        })
      );
  }

  deletePosts() {
    return this.http
      .delete('https://angular-http-78bd8-default-rtdb.firebaseio.com/posts.json', {
        observe: 'events',
        responseType: 'text'
        // Default type is json if me set as text then it does not converted into json
        // If we declare as json then typescipt automatically converts data into json
      })
      .pipe(
        tap(event => {
          console.log(event);
          if (event.type === HttpEventType.Sent) {
            // Here you can tell to user on UI that request was sent and
            // waiting for response
          }
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        })
      );
  }
}
