import { Component, Input, OnChanges } from '@angular/core';
import { UserSummary } from 'src/app/interfaces/userSummary.interface';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styles: [
  ]
})
export class SummaryComponent implements OnChanges {

  @Input() userSummary!: UserSummary;

  constructor() { }

  ngOnChanges(): void {
    console.log(this.userSummary);
  }

  

}