import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ChartsComponent } from './stats/charts/charts.component';
import { AchivementsComponent } from './stats/achivements/achivements.component';
import { SummaryComponent } from './stats/summary/summary.component';


// PrimeNG
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

// Angular 2 Charts
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ChartsComponent,
    AchivementsComponent,
    SummaryComponent
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
