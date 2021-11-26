import { Component, Input, OnChanges } from '@angular/core';
import { Anime } from '../interfaces/userCompleted.interface';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styles: []
})
export class ChartsComponent implements OnChanges {

  @Input() completedAnimes!: Anime[]; 
  demogArray: number[] = [0, 0, 0, 0, 0, 0];

  constructor() { }

  ngOnChanges(): void {

    this.demogArray = [0, 0, 0, 0, 0, 0];

    this.completedAnimes.forEach( (anime: Anime) => {
      if (anime.demographics.length < 1 ) {

        // Demografía no registrada.
        this.demogArray[5]++;

      } else {

        // Almacenar valores en la array en función de la demografía.
        switch(anime.demographics[0].name.toString()) {
          case 'Shounen':{
            this.demogArray[0]++;
            break;  
          }
          case 'Shoujo':{
            this.demogArray[1]++;
            break;  
          }
          case 'Seinen':{
            this.demogArray[2]++;
            break;  
          }
          case 'Josei':{
            this.demogArray[3]++;
            break;  
          }
          case 'Kids':{
            this.demogArray[4]++;
            break;  
          }
          default: break;
        }

      }

    });
    console.log(this.demogArray);
    this.doughnutChartData = [ this.demogArray ];
  }


  // Gráfica de dónut
  public doughnutChartLabels: Label[] = ['Shounen', 'Shoujo', 'Seinen', 'Josei', 'Kids', 'No especificado'];
  public doughnutChartData: MultiDataSet = [ ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: [
        '#E8610C',
        '#FF00FA',
        '#0C41E8',
        '#0DFF89',
        '#FFE800',
        '#CCC'        
      ]
    }
  ]
  

}
