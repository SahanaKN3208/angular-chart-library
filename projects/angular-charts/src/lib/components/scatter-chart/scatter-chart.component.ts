import { Component, Input } from '@angular/core';
import { EChartsOption } from 'echarts';
import {NgxEchartsDirective, NgxEchartsModule} from 'ngx-echarts';

@Component({
  selector: 'lib-scatter-chart',
  standalone:true,
  imports: [
    NgxEchartsDirective,NgxEchartsModule
  ],
  templateUrl: './scatter-chart.component.html',
  styleUrls: ['./scatter-chart.component.css']
})

export class ScatterChartComponent {
  @Input() initOption: any = {
    renderer: 'canvas'
  }
  @Input() chartOptions: EChartsOption = {
    title: {
      text: 'Scatter Chart'
    },
    tooltip: {
      trigger: 'item'
    },
    legend:{
      show: true,
      left: 'right'
    },
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Data Points',
        type: 'scatter',
        data: [
          [10, 8],
          [15, 12],
          [15, 14],
          [13, 12],
          [16, 10],
          [15, 15],
          [9, 12],
          [10, 10],
          [20, 18],
          [25, 24],
          [30, 28],
          [35, 36],
          [40, 42]
        ]
      }
    ]
  };
}
