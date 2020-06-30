import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { IonicModule } from '@ionic/angular';

import { CountriesPageRoutingModule } from './countries-routing.module';

import { CountriesPage } from './countries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountriesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [CountriesPage]
})
export class CountriesPageModule {}
