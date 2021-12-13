import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ChartsComponent } from './stats/charts/charts.component';
import { AchivementsComponent } from './stats/achivements/achivements.component';
import { SummaryComponent } from './stats/summary/summary.component';

// Achivements
import { HikikomoriComponent } from './stats/achivements/achivements-list/hikikomori/hikikomori.component';
import { NextComponent } from './stats/achivements/achivements-list/next/next.component';
import { SemiHikikomoriComponent } from './stats/achivements/achivements-list/semi-hikikomori/semi-hikikomori.component';
import { coleguita } from './stats/achivements/achivements-list/coleguita/coleguita';


// PrimeNG
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

// Angular 2 Charts
import { ChartsModule } from 'ng2-charts';
import { NostalgiaComponent } from './stats/achivements/achivements-list/nostalgia/nostalgia.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ChartsComponent,
    AchivementsComponent,
    SummaryComponent,
    coleguita,
    HikikomoriComponent,
    NextComponent,
    SemiHikikomoriComponent,
    NostalgiaComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ButtonModule,
    CardModule,
    ChartsModule,
    HttpClientModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
