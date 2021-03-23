import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';

import { CurrencyPage } from './currency.page';
import { CurrencyPageRoutingModule } from './currency-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CurrencyPageRoutingModule,
    ReactiveComponentModule
  ],
  declarations: [CurrencyPage]
})
export class CurrencyPageModule {}
