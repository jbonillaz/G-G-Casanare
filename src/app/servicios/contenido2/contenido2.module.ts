import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Contenido2PageRoutingModule } from './contenido2-routing.module';

import { Contenido2Page } from './contenido2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Contenido2PageRoutingModule
  ],
  declarations: [Contenido2Page]
})
export class Contenido2PageModule {}
