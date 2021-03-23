import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class CurrencyService{
  constructor(private http: HttpClient) {}

  public getCurrencyList(): Observable<any> {
    return this.http.get<{}>('https://api.exchangeratesapi.io/latest?base=USD&symbols=GBP,AUD,RUB,JPY,CAD,CHF');
  }
}
