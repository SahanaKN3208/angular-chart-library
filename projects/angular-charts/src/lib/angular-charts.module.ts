import { NgModule } from '@angular/core';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';

@NgModule({
  imports: [
    LineChartComponent,
    PieChartComponent
  ],
  exports: [
    LineChartComponent,
    PieChartComponent
  ],
})
export class AngularChartsModule { }
