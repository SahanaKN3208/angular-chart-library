import { Component, Input } from '@angular/core';
import {NgxEchartsDirective, NgxEchartsModule} from 'ngx-echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'lib-bar-chart',
  standalone: true,
  imports: [NgxEchartsModule, NgxEchartsDirective],
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {

  @Input() chartOptions: EChartsOption = {
    title: {
      text: 'Bar Chart'
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Visits',
        type: 'bar',
        data: [120, 200, 150, 80, 70, 110, 130],
      }
    ]
  };
}





