import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {BarChartComponent} from "./bar-chart.component";
import {NgxEchartsModule,NgxEchartsDirective} from "ngx-echarts";

const meta: Meta<BarChartComponent> = {
  title: 'Charts/BarChart',
  component: BarChartComponent,
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

type Story = StoryObj<BarChartComponent>;

export const BarChart: Story = {
  args: {
    chartOptions: {
      tooltip: { trigger: 'axis'},
      xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']},
      yAxis: { type: 'value'},
      series: [{
          name: 'Visits',
          type: 'bar',
          data: [120, 200, 150, 80, 70, 110, 130],
        }]
    }
    }
  }
