import {Component, Input} from '@angular/core';
import {NgxEchartsDirective,NgxEchartsModule} from "ngx-echarts";
import {EChartsOption} from "echarts";

@Component({
  selector: 'lib-pie-chart',
  templateUrl: './pie-chart.component.html',
  standalone: true,
  imports: [
    NgxEchartsDirective,NgxEchartsModule
  ],
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  @Input() initOption: any = {
    renderer: 'canvas'
  }
  @Input() chartOptions: EChartsOption ={
    title: {
      text: 'Pie Chart'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'right'
    },
    series: [
      {
        name: 'Access Source',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(91,134,248,0.5)'
          }
        }
      }
    ]
  };
}
