import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EChartsOption, SeriesOption } from 'echarts';
import {NgxEchartsDirective, NgxEchartsModule } from 'ngx-echarts';

@Component({
  selector: 'ddip-line-chart',
  standalone: true,
  imports: [NgxEchartsDirective, NgxEchartsModule],
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnChanges {

  @Input() seriesData: { name: string; data: number[]; smooth?: boolean }[] = [];
  @Input() categories: string[] = [];
  @Input() title?: EChartsOption['title'];
  @Input() tooltip?: EChartsOption['tooltip'];
  @Input() legend?: EChartsOption['legend'];
  @Input() xAxis?: EChartsOption['xAxis'];
  @Input() yAxis?: EChartsOption['yAxis'];

  chartOptions: EChartsOption = {};

  ngOnChanges(changes: SimpleChanges): void {
    this.updateChartOptions();
  }

  private updateChartOptions(): void {
    const series: SeriesOption[] = this.seriesData.map(item => ({
      type: 'line',
      name: item.name,
      data: item.data,
      smooth: item.smooth ?? false
    }));

    this.chartOptions = {
      title: this.title,
      tooltip: this.tooltip ?? { trigger: 'axis' },
      legend: this.legend,
      xAxis: this.xAxis ?? { type: 'category', data: this.categories },
      yAxis: this.yAxis ?? { type: 'value' },
      series
    };
  }
}
