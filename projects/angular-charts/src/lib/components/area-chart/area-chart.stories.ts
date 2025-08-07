import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import { AreaChartComponent} from "./area-chart.component";
import {NgxEchartsModule,NgxEchartsDirective} from "ngx-echarts";

const meta: Meta<AreaChartComponent> = {
  title: 'Charts/AreaChart',
  component: AreaChartComponent,
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

type Story = StoryObj<AreaChartComponent>;

export const AreaChart: Story = {
  args: {
    chartOptions: {
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
          areaStyle: {}
        }
      ]
    },
    initOption: {
      renderer: 'canvas'
    }
  }
}
