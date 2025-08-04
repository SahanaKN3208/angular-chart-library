import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {LineChartComponent} from "./line-chart.component";
import {NgxEchartsDirective, NgxEchartsModule} from "ngx-echarts";

const meta: Meta<LineChartComponent> = {
  title: 'Charts/LineChart',
  component: LineChartComponent,
  decorators: [
    moduleMetadata({
      imports: [NgxEchartsModule.forRoot({
        echarts: () => import('echarts')
      }),NgxEchartsDirective]
    })
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<LineChartComponent>;

export const LineChart: Story = {
  args: {
    chartOptions: {
      title:{text: 'Line Chart'},
      tooltip: { trigger: 'axis' },
      xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      yAxis: { type: 'value' },
      series: [{
        name: 'Sales',
        type: 'line',
        data: [100, 120, 150, 170, 140, 160, 180],
        smooth: true
      }]
    }
  },
};
