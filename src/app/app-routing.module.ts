import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationComponent } from './animation/animation.component';
import { BackgroundComponent } from './background/background.component';
import { BoxModelComponent } from './box-model/box-model.component';
import { CenterComponent } from './center/center.component';
import { CirculoComponent } from './circulo/circulo.component';
import { ClearfixComponent } from './clearfix/clearfix.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { GradientComponent } from './gradient/gradient.component';
import { GridboxComponent } from './gridbox/gridbox.component';
import { ImageFloatComponent } from './image-float/image-float.component';
import { ImageLegendComponent } from './image-legend/image-legend.component';
import { IndexComponent } from './index/index.component';
import { InputValidationComponent } from './input-validation/input-validation.component';
import { NavWithoutJsComponent } from './nav-without-js/nav-without-js.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full'},
  { path: 'nav-without-js', component: NavWithoutJsComponent},
  { path: 'index',
    children: [
      { path: '', component: IndexComponent},
      { path: 'input-validation', component: InputValidationComponent, outlet: 'sidebar'},
      { path: 'circulo', component: CirculoComponent},
      { path: 'image-legend', component: ImageLegendComponent},
      { path: 'image-float', component: ImageFloatComponent},
      { path: 'clearfix', component: ClearfixComponent},
      { path: 'box-model', component: BoxModelComponent},
      { path: 'center', component: CenterComponent},
      { path: 'flexbox', component: FlexboxComponent},
      { path: 'gridbox', component: GridboxComponent},
      { path: 'sidebar', component: SidebarComponent},
      { path: 'background', component: BackgroundComponent},
      { path: 'gradient', component: GradientComponent},
      { path: 'animation', component: AnimationComponent}      
    ]},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
