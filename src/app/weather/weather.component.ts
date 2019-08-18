import { Component, OnInit } from '@angular/core';
import { StructureForData } from '../StructureForData';
import { SearchService } from '../search.service';

import { from } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  private currentSearchValue: StructureForData;
  private pastSearch = [];
  presentHistory = false;
  showResult = false;
  
  backgroundUrl;
  searchLogo;

  constructor(private service: SearchService) { }

  ngOnInit() {
    // Setting the background image for appropriate page
    this.backgroundUrl = this.service.getBackgroundImage();
    console.clear();
    this.searchLogo = '../../assets/shared/search-icon.svg';
  }
  getResult(value) {
    if (value === '' || value == null) {
      alert('Input is empty');
    } else {
      this.showResult = true;
      this.searchLogo = '../../assets/shared/loading 1-icon.svg';
      this.service.getWeather(value).subscribe((data: StructureForData) => {
        this.currentSearchValue = data;
        this.currentSearchValue.searchTime = new Date();
        this.pastSearch.push(this.currentSearchValue);
        if (this.pastSearch.length >= 2) {
          this.presentHistory = true;
        }
        setTimeout(() => {
          this.searchLogo = '../../assets/shared/search-icon.svg';
        }, 500);
      });
    }
  }
}
