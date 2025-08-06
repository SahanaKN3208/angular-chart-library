import { NgModule } from '@angular/core';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { ScatterChartComponent } from './components/scatter-chart/scatter-chart.component';
import {BarChartComponent} from "./components/bar-chart/bar-chart.component";

@NgModule({
  imports: [
    LineChartComponent,
    PieChartComponent,
    ScatterChartComponent,
    BarChartComponent
  ],
  exports: [
    LineChartComponent,
    PieChartComponent,
    ScatterChartComponent,
    BarChartComponent
  ]
})
export class AngularChartsModule { }
