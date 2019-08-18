import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { SearchService } from './search.service';
import { GeneralComponent } from './general/general.component';
import { AppRoutingModule } from './app-routing.module';
import { CryptoCurrencyComponent } from './crypto-currency/crypto-currency.component';
import { OilComponent } from './oil/oil.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { StockHomeComponent } from './stock-home/stock-home.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    GeneralComponent,
    CryptoCurrencyComponent,
    OilComponent,
    VegetablesComponent,
    StockHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
