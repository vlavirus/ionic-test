import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

import { CurrencyService } from '../../system/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: 'currency.page.html',
  styleUrls: ['currency.page.scss']
})
export class CurrencyPage implements OnInit {

  currencies$: Observable<any>;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencies$ = this.currencyService.getCurrencyList().pipe(
      first(),
      map(data => Object.entries(data.rates))
    );
  }



}
