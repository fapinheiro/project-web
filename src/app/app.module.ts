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
import { FlexboxComponent } from './flexbox/flexbox.component';
import { GridboxComponent } from './gridbox/gridbox.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BackgroundComponent } from './background/background.component';
import { GradientComponent } from './gradient/gradient.component';
import { AnimationComponent } from './animation/animation.component';
import { NavWithoutJsComponent } from './nav-without-js/nav-without-js.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    InputValidationComponent,
    CirculoComponent,
    ImageLegendComponent,
    ImageFloatComponent,
    ClearfixComponent,
    BoxModelComponent,
    CenterComponent,
    FlexboxComponent,
    GridboxComponent,
    SidebarComponent,
    BackgroundComponent,
    GradientComponent,
    AnimationComponent,
    NavWithoutJsComponent,
    IndexComponent
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
