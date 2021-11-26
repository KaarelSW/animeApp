import { Component } from '@angular/core';
import { User } from './interfaces/userCompleted.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'animeApp';
  userSearched!: User;

  
  onUserEmitterEvent( event: User ){
    this.userSearched = event;
  }
}
