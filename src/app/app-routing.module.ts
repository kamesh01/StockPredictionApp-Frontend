import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

import { GeneralComponent } from './general/general.component';
import { WeatherComponent } from './weather/weather.component';
import { CryptoCurrencyComponent } from './crypto-currency/crypto-currency.component';
import { OilComponent } from './oil/oil.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { StockHomeComponent } from './stock-home/stock-home.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: StockHomeComponent},
  { path: 'general-stock', component: GeneralComponent },
  { path: 'bitcoin-stock', component: CryptoCurrencyComponent },
  { path: 'oil-stock', component: OilComponent },
  { path: 'vegetable-stock', component: VegetablesComponent },
  { path: 'weather-stock', component: WeatherComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
