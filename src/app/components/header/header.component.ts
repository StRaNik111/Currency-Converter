import { Component, Input } from '@angular/core';
import { ICurrency } from 'src/app/models/currency';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent  {
  @Input() currencies: ICurrency[];


}

