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
      text: 'Sales by product category'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      orient: 'vertical',
      left: 'right'
    },
    xAxis: {
      type: 'category',
      // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      data: ['Electronics', 'Clothing', 'Books', 'Home', 'Toys']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Visits',
        type: 'bar',
        // data: [120, 200, 150, 80, 70, 110, 130],
        data: [12000, 8500, 4300, 9800, 6700],
        itemStyle: {
          color: '#28a745' // Custom color for the bars
        }
      }
    ]
  };
}





