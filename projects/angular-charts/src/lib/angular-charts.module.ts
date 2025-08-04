import { NgModule } from '@angular/core';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { ScatterChartComponent } from './components/scatter-chart/scatter-chart.component';

@NgModule({
  imports: [
    LineChartComponent,
    PieChartComponent,
    ScatterChartComponent
  ],
  exports: [
    LineChartComponent,
    PieChartComponent,
    ScatterChartComponent
  ]
})
export class AngularChartsModule { }
