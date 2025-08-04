import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ScatterChartComponent } from './scatter-chart.component';
import {NgxEchartsDirective, NgxEchartsModule} from 'ngx-echarts';

const meta: Meta<ScatterChartComponent> = {
  title: 'Charts/ScatterChart',
  component: ScatterChartComponent,
  decorators: [
    moduleMetadata({
      imports: [
        NgxEchartsModule.forRoot({
          echarts: () => import('echarts')
        }),NgxEchartsDirective
      ]
    })
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<ScatterChartComponent>;

export const ScatterChart: Story = {
  args: {
    chartOptions: {
      title: {
        text: 'Scatter Chart'
      },
      tooltip: { trigger: 'item' },
      xAxis: { type: 'value' },
      yAxis: { type: 'value' },
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
    }
  },
};
