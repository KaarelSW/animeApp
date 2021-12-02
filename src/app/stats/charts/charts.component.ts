import { Component, Input, OnChanges } from '@angular/core';
import { Anime, Demographic, GenresChart, YearsObject } from '../../interfaces/userCompleted.interface';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styles: []
})
export class ChartsComponent implements OnChanges {

  @Input() completedAnimes!: Anime[]; 
  demogArray: number[] = [0, 0, 0, 0, 0, 0];
  scoreArray: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  //genreArray: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  constructor() { }

  ngOnChanges(): void {

    this.demogArray = [0, 0, 0, 0, 0, 0];
    this.scoreArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    this.completedAnimes.forEach( (anime: Anime) => {

      this.sortByDemo( anime );

      this.sortByScore( anime );

      this.sortByGenres( anime );

    });

    // Guardar datos obtenidos del usuario en las correspondientes gráficas.
    this.doughnutChartData = [ this.demogArray ];
    this.barChartData = [
      { data: this.scoreArray, label: 'Número de calificaciones' }
    ];
  }


  // Gráfica de dónut. DEMOGRAFÍAS.
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
  ];


  // Gráfica de barras. CALIFICACIONES.
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartLabels: Label[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [], label: '' }
  ];



  sortByDemo( anime: Anime ) {

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
  }

  sortByScore( anime: Anime ) {

    if ( anime.score >= 1 && anime.score <= 10 ) this.scoreArray[anime.score - 1]++;

  }

  sortByGenres( anime: Anime ){

    anime.genres.forEach( ( genre: Demographic ) => {

      //this.genreObject[genre.name]++;

      // console.log(genre);

      // Hacer un diccionario y: this.genreArray[genre]++;
      
      
    });

  }

  sortByYear( anime: Anime ){
    
  }

}
