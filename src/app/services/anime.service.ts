import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/userCompleted.interface';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  
  constructor( private http: HttpClient ) { }

  searchUser( user: string ): Observable<User> {

    return this.http.get<User>(`https://api.jikan.moe/v3/user/${user}/animelist/completed`);
  }
  
}
