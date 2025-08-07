import { NgModule } from '@angular/core';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { ScatterChartComponent } from './components/scatter-chart/scatter-chart.component';
import {BarChartComponent} from "./components/bar-chart/bar-chart.component";
import * as echarts from 'echarts/core';
import { BarChart ,LineChart,PieChart,ScatterChart} from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import {AreaChartComponent} from "./components/area-chart/area-chart.component";
echarts.use([BarChart,LineChart,PieChart,ScatterChart ,GridComponent, CanvasRenderer])

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
