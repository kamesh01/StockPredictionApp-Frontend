import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { StructureForData } from './StructureForData';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  bgUrl: any;
  totalDays = ['Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Satureday', 'Sunday'];

  constructor(private http: HttpClient) { }

  // Getting values as object from stock from backend
  getGeneral(searchElement: string): Observable<StructureForData> {
    return this.http.get<StructureForData>('http://localhost:8080/general/get?companyName=' + searchElement);
  }

  // Getting values as object from stock from backend
  getWeather(searchElement: string): Observable<StructureForData> {
    return this.http.get<StructureForData>('http://localhost:8080/weather/get?cityName=' + searchElement);
  }

  // Getting values as object from stock from backend
  getCryptocurrency(searchElement: string): Observable<StructureForData> {
    return this.http.get<StructureForData>('http://localhost:8080/crypto/get?currencyName=' + searchElement);
  }

  // Getting values as object from stock from backend
  getVegetables(searchElement: string): Observable<StructureForData> {
    return this.http.get<StructureForData>('http://localhost:8080/vegetables/get?vegeName=' + searchElement);
  }

  // Getting values as object from stock from backend
  getOil(searchElement: string): Observable<StructureForData> {
    return this.http.get<StructureForData>('http://localhost:8080/oil/get?oilName=' + searchElement);
  }

  // Setting background image for specific component
  setBackgroundImage(bgImage) {
    this.bgUrl = bgImage;
  }
  getBackgroundImage() {
    return this.bgUrl;
  }
  getNameOfDays() {

  }
}
