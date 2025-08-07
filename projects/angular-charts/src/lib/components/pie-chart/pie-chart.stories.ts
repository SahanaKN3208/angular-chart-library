import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {NgxEchartsDirective, NgxEchartsModule} from "ngx-echarts";
import {PieChartComponent} from "./pie-chart.component";

const meta: Meta<PieChartComponent> = {
  title: 'Charts/PieChart',
  component: PieChartComponent,
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

type Story = StoryObj<PieChartComponent>;

export const PieChart: Story = {
  args: {
    chartOptions: {
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
            {value: 1048, name: 'Search Engine'},
            {value: 735, name: 'Direct'},
            {value: 580, name: 'Email'},
            {value: 484, name: 'Union Ads'},
            {value: 300, name: 'Video Ads'}
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    },
    initOption: {
      renderer: 'canvas'
    }
  }
};
