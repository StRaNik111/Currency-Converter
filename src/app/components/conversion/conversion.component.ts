import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})

export class ConversionComponent {
  @Input() UsdToUan:number;
  @Input() EurToUan:number;
  @Input() EurToUsd:number;

  selectCurrencies = ['UAN', 'USD', 'EUR']
  convertFrom = 'UAN'
  convertTo = 'UAN'
  amount:number = 0
  result:any = 0


  calculateCurrency(){
    if(this.convertFrom === 'UAN'){

      if(this.convertTo === 'USD'){
        this.result =  (this.amount / this.UsdToUan).toFixed(3)
      }
      else if( this.convertTo === 'EUR'){
        this.result =  (this.amount / this.EurToUan).toFixed(3)

      }
      else if (this.convertTo === 'UAN'){
        this.result = this.amount

      }
    }
    else if(this.convertFrom === 'EUR') {
      if(this.convertTo === 'USD'){
        this.result =  (this.amount * this.EurToUsd).toFixed(3)
      }
      else if (this.convertTo === 'UAN'){
        this.result = (this.amount * this.EurToUan).toFixed(3)
      }
      else if( this.convertTo === 'EUR'){
        this.result = this.amount
      }
    }
    else if (this.convertFrom === 'USD'){
      if(this.convertTo === 'USD'){
        this.result = this.amount
      }
      else if (this.convertTo === 'UAN'){
        this.result = (this.amount * this.UsdToUan).toFixed(3)
      }
      else if( this.convertTo === 'EUR'){
        this.result = (this.amount / this.EurToUsd).toFixed(3)
      }
    }
  }

}
