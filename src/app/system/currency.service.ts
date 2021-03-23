import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiConstants } from '../constants/api.constant'

@Injectable({ providedIn: 'root'})
export class CurrencyService{
  constructor(private http: HttpClient) {}

  public getCurrencyList(): Observable<any> {
    return this.http.get<{}>(`${ApiConstants.url}`);
  }
}
