import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StockList } from '../allStocks';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-stock-home',
  templateUrl: './stock-home.component.html',
  styleUrls: ['./stock-home.component.css']
})
export class StockHomeComponent implements OnInit {
  // Initializing all stock present in the system
  private stockList = StockList;

  constructor(private router: Router,
              private service: SearchService) { }

  ngOnInit() {

  }
  // Routing to a required view
  showStockView(urlPath: string) {
    this.router.navigate([urlPath]);
  }
  setBackgroundImage(bgImg) {
    this.service.setBackgroundImage(bgImg);
  }
}
