import { Component } from '@angular/core';
import { User } from './interfaces/userCompleted.interface';
import { UserSummary } from './interfaces/userSummary.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'animeApp';
  userCompletedAnimes!: User;
  userSummary!: UserSummary;

  
  onUserCompletedAnimesEmitter( event: User ){
    this.userCompletedAnimes = event;
  }  

  onUserSummaryEmitter( event: UserSummary ){
    this.userSummary = event;
  }
}
