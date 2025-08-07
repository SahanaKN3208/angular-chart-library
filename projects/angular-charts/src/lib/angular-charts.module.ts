import { NgModule } from '@angular/core';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { ScatterChartComponent } from './components/scatter-chart/scatter-chart.component';
import {BarChartComponent} from "./components/bar-chart/bar-chart.component";
import {DoubleLineChartComponent} from "./components/double-line-chart/double-line-chart.component";
import * as echarts from 'echarts/core';
import { BarChart ,LineChart,PieChart,ScatterChart} from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([BarChart,LineChart,PieChart,ScatterChart ,GridComponent, CanvasRenderer])

@NgModule({
  imports: [
    LineChartComponent,
    PieChartComponent,
    ScatterChartComponent,
    BarChartComponent,
    DoubleLineChartComponent
  ],
  exports: [
    LineChartComponent,
    PieChartComponent,
    ScatterChartComponent,
    BarChartComponent,
    DoubleLineChartComponent
  ]
})
export class AngularChartsModule { }
