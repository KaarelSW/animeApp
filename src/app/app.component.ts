import { Component } from '@angular/core';
import { User } from './interfaces/userCompleted.interface';
import { UserFriends, UserSummary } from './interfaces/userSummary.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'animeApp';
  userCompletedAnimes!: User;
  userSummary!: UserSummary;
  userFriends!: UserFriends;

  
  onUserFriendsEmitter( event: UserFriends ){
    this.userFriends = event;
  }  
  
  onUserCompletedAnimesEmitter( event: User ){
    this.userCompletedAnimes = event;
  }  

  onUserSummaryEmitter( event: UserSummary ){
    this.userSummary = event;
  }
}
