import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';
import {NgxEchartsDirective, NgxEchartsModule} from 'ngx-echarts';

@Component({
  selector: 'lib-double-line-chart',
  standalone: true,
  imports: [
    NgxEchartsDirective, NgxEchartsModule
  ],
  templateUrl: './double-line-chart.component.html',
  styleUrls: ['./double-line-chart.component.css']
})
export class DoubleLineChartComponent {
  chartOptions: EChartsOption = {
    title: {
      text: 'Double Line Chart'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Series A', 'Series B']
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Series A',
        type: 'line',
        smooth: true,
        data: [10, 15, 9, 18, 20, 25, 30]
      },
      {
        name: 'Series B',
        type: 'line',
        smooth: true,
        data: [5, 8, 6, 12, 14, 20, 24]
      }
    ]
  };
}
