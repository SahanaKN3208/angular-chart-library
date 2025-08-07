import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { DoubleLineChartComponent } from './double-line-chart.component';
import { NgxEchartsModule, NgxEchartsDirective } from 'ngx-echarts';

const meta: Meta<DoubleLineChartComponent> = {
  title: 'Charts/DoubleLineChart',
  component: DoubleLineChartComponent,
  decorators: [
    moduleMetadata({
      imports: [
        NgxEchartsModule.forRoot({
          echarts: () => import('echarts')
        }),
        NgxEchartsDirective
      ]
    })
  ],
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<DoubleLineChartComponent>;

export const Default: Story = {
  args: {
    chartOptions: {
      title: {
        text: 'Double Line Chart'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        show: true,
        orient: 'vertical',
        left: 'right'
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
    }
  }
};
