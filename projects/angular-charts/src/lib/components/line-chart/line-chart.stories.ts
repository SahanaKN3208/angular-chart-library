import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { LineChartComponent } from './line-chart.component';
import { NgxEchartsDirective, NgxEchartsModule } from 'ngx-echarts';

const meta: Meta<LineChartComponent> = {
  title: 'Charts/LineChart',
  component: LineChartComponent,
  decorators: [
    moduleMetadata({
      imports: [
        NgxEchartsModule.forRoot({
          echarts: () => import('echarts'),
        }),
        NgxEchartsDirective,
      ],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<LineChartComponent>;

export const LineChart: Story = {
  args: {
    seriesData: [
      { name: 'Visits', data: [120, 200, 150, 80, 70, 110, 130], smooth: true },
      { name: 'Sales', data: [90, 140, 180, 100, 60, 80, 120] },
    ],
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    title: { text: 'Weekly Performance' },
    tooltip: { trigger: 'axis' },
    legend: { data: ['Visits', 'Sales'], show: true, left: 'right' },
    xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    yAxis: { type: 'value' },
  },
};
