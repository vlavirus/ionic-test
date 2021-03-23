import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CurrencyPage } from './currency.page';
import { ReactiveComponentModule } from '@ngrx/component';

import { Tab1PageRoutingModule } from './currency-routing.module';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    ReactiveComponentModule
  ],
  declarations: [CurrencyPage]
})
export class Tab1PageModule {}
