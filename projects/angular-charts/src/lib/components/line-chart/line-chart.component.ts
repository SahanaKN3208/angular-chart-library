import {Component, Input} from '@angular/core';
import { EChartsOption } from 'echarts';
import {NgxEchartsDirective} from "ngx-echarts";

@Component({
  selector: 'lib-line-chart',
  standalone: true,
  imports: [
    NgxEchartsDirective
  ],
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {
  @Input() chartOptions: EChartsOption = {
    title: {
      text: 'Sample Line Chart'
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
        type: 'line',
        data: [120, 200, 150, 80, 70, 110, 130],
        smooth: true
      }
    ]
  };

}
