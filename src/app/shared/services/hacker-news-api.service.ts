import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { flatMap, map, skipUntil, skipWhile, take, tap, toArray } from 'rxjs/operators';

import { Story } from '../models/story.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsApiService {
  private readonly baseUrl = 'https://hacker-news.firebaseio.com/v0/';
  storiesCache: Array<number>;

  constructor(private http: HttpClient) { }

  fetchStories( storyType: string, pageNumber?: number, lastElement?: number): Observable<Array<number>>{
    // console.log(storyType, pageNumber);
    const stories = this.http.get<Array<number>>(`${this.baseUrl + storyType}stories.json`);
    let foundLastElement = false;
    let lastElementNotPassed = true;
    const requiredStories = stories.pipe(
      // tap(d => console.log(d)),
      flatMap(ids => {
        return ids;
      }),
      skipWhile((value: any, index: number) => {
        if (lastElement){
          if (foundLastElement){
            lastElementNotPassed = false;
          }
          if (+value === +lastElement) {
            foundLastElement = true;
          }
          return lastElementNotPassed;
        }
        else {
        if (index < (pageNumber - 1) * 10){
          return true;
        }
        else {
          return false;
        }
        }
      }),
      take(10),
      toArray(),
    );
    return requiredStories;
  }

  fetchItem(id: number): Observable<any>{
    const story = this.http.get<Story>(`${this.baseUrl}item/${id}/.json`);
    return story;
  }

  fetchUser(id: string): Observable<User>{
    const user = this.http.get<User>(`${this.baseUrl}user/${id}.json`);
    return user;
  }

  fetchUserSubmissionIds(id: string, lastItem?: number): Observable<Array<number>> {
    let lastElementFound = false;
    let canStartTake = false;
    const userSubmissions = this.http.get<User>(`${this.baseUrl}user/${id}.json`).pipe(
      map(user => user.submitted),
      // tap(d => console.log(d)),
      flatMap(submissions => submissions),
      skipWhile((submission, index) => {
        if (lastItem){
          if (lastElementFound){
            canStartTake = true;
          }
          if (submission === lastItem){
            lastElementFound = true;
          }
          return !canStartTake;
        } else {
          return false;
        }
      }),
      take(10),
      toArray(),
      // tap(d => console.log(d))
    );
    return userSubmissions;
  }
}
