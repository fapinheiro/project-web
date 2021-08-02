import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxModelComponent } from './box-model/box-model.component';
import { CirculoComponent } from './circulo/circulo.component';
import { ClearfixComponent } from './clearfix/clearfix.component';
import { ImageFloatComponent } from './image-float/image-float.component';
import { ImageLegendComponent } from './image-legend/image-legend.component';
import { InputValidationComponent } from './input-validation/input-validation.component';

const routes: Routes = [
  { path: 'input-validation', component: InputValidationComponent},
  { path: 'circulo', component: CirculoComponent},
  { path: 'image-legend', component: ImageLegendComponent},
  { path: 'image-float', component: ImageFloatComponent},
  { path: 'clearfix', component: ClearfixComponent},
  { path: 'box-model', component: BoxModelComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
