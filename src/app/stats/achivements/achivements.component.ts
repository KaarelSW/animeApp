import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Anime } from 'src/app/interfaces/userCompleted.interface';
import { Friend, UserSummary } from 'src/app/interfaces/userSummary.interface';

@Component({
  selector: 'app-achivements',
  templateUrl: './achivements.component.html',
  styles: [
  ]
})
export class AchivementsComponent implements OnChanges{
  
  @Input() userSummary!: UserSummary;
  @Input() userCompletedAnimes!: Anime[]; 
  @Input() userFriends!: Friend[]; 

  semiHikikomori(): boolean {
    if ( this.userSummary.anime_stats.completed >= 150 ) return true;
    else return false;
  }

  hikikomori(): boolean {
    if ( this.userSummary.anime_stats.completed >= 300 ) return true;
    else return false;
  }

  next(): boolean {
    if ( ( this.userSummary.anime_stats.dropped + this.userSummary.anime_stats.on_hold ) >= 20 ) return true;
    else return false;
  }

  coleguita(): boolean {
    if ( this.userFriends.length > 20 ) return true;
    else return false;
  }  

  nostalgia(): boolean {
    if ( this.userSummary.anime_stats.rewatched > 10 ) return true;
    else return false;
  }

  ngOnChanges(): void {
    console.log('onChanges:');
    console.log(this.userFriends);
  }

}
