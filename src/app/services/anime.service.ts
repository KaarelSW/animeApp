import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/userCompleted.interface';
import { UserFriends, UserSummary } from '../interfaces/userSummary.interface';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  
  constructor( private http: HttpClient ) { }

  searchUserCompletedAnimes( user: string ): Observable<User> {
    return this.http.get<User>(`https://api.jikan.moe/v3/user/${user}/animelist/completed`);
  }

  searchUserSummary( user: string ): Observable<UserSummary>{
    return this.http.get<UserSummary>(`https://api.jikan.moe/v3/user/${user}`);
  }
  
  searchUserFriends( user: string ): Observable<UserFriends>{
    return this.http.get<UserFriends>(`https://api.jikan.moe/v3/user/${user}/friends`);
  }
  
  
}
