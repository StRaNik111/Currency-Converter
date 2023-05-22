import { Component, OnInit, DoCheck } from '@angular/core';
import { ICurrency } from './models/currency';
import { CurrenciesService } from './servises/currencies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-app';
  arrayRates = ['USD', 'EUR']

  currencies: ICurrency[] = []
  EurToUan: number = 0
  UsdToUan: number = 0
  EurToUsd:number = 0

  constructor(private currenciesService : CurrenciesService) {}
  ngOnInit():void {
    this.currenciesService.getAll().subscribe(data => {
      this.currencies = data.filter(e => this.arrayRates.includes(e.cc))
      this.EurToUan = this.currencies.filter(e => 'EUR'.includes(e.cc))[0].rate
      this.UsdToUan = this.currencies.filter(e => 'USD'.includes(e.cc))[0].rate
      this.EurToUsd = this.EurToUan / this.UsdToUan
    })
  }

}
