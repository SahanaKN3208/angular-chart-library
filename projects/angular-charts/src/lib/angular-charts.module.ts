import { NgModule } from '@angular/core';
import { AngularChartsComponent } from './angular-charts.component';
import {ButtonComponent} from "./components/button/button.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    AngularChartsComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    AngularChartsComponent
  ]
})
export class AngularChartsModule { }
