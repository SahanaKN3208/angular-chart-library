import {Component, Input} from '@angular/core';
import { EChartsOption } from 'echarts';
import {NgxEchartsDirective,NgxEchartsModule} from "ngx-echarts";

@Component({
  selector: 'lib-line-chart',
  standalone: true,
  imports: [
    NgxEchartsDirective,NgxEchartsModule
  ],
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {
  @Input() chartOptions: EChartsOption = {
    title: {
      text: 'Line Chart'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend:{
      data:['Visits'],
      show:true,
      left: 'right'
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
  @Input() initOption: any = {
    renderer: 'canvas'
  }
}
