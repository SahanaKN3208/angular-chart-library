import {Component, Input} from '@angular/core';
import {EChartsOption} from "echarts";
import {NgxEchartsDirective, NgxEchartsModule} from "ngx-echarts";

@Component({
  selector: 'lib-area-chart',
  standalone: true,
  imports: [NgxEchartsModule, NgxEchartsDirective],
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {
  @Input() initOption: any = {
    renderer: 'canvas'
  }
  @Input() chartOptions: EChartsOption = {
    title: {
      text: 'Area Chart'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Visits'],
      orient: 'vertical',
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
        areaStyle: {} // This enables the area fill
      }
    ]
  };
}
