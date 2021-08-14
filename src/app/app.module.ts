import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputValidationComponent } from './input-validation/input-validation.component';
import { CirculoComponent } from './circulo/circulo.component';
import { ImageLegendComponent } from './image-legend/image-legend.component';
import { ImageFloatComponent } from './image-float/image-float.component';
import { ClearfixComponent } from './clearfix/clearfix.component';
import { BoxModelComponent } from './box-model/box-model.component';
import { CenterComponent } from './center/center.component';

@NgModule({
  declarations: [
    AppComponent,
    InputValidationComponent,
    CirculoComponent,
    ImageLegendComponent,
    ImageFloatComponent,
    ClearfixComponent,
    BoxModelComponent,
    CenterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
