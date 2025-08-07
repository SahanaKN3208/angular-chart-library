import { NgModule } from '@angular/core';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { ScatterChartComponent } from './components/scatter-chart/scatter-chart.component';
import {BarChartComponent} from "./components/bar-chart/bar-chart.component";
import {AreaChartComponent} from "./components/area-chart/area-chart.component";

@NgModule({
  imports: [
    LineChartComponent,
    PieChartComponent,
    ScatterChartComponent,
    BarChartComponent,
    AreaChartComponent
  ],
  exports: [
    LineChartComponent,
    PieChartComponent,
    ScatterChartComponent,
    BarChartComponent,
    AreaChartComponent
  ]
})
export class AngularChartsModule { }
