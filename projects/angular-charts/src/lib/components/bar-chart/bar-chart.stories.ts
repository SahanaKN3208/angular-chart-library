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
      title: {
        text: 'Sales by product category'
      },
      tooltip: { trigger: 'axis'},
      legend: {
        orient: 'vertical',
        left: 'right'
      },
      xAxis: { type: 'category', data: ['Electronics', 'Clothing', 'Books', 'Home', 'Toys']},
      yAxis: { type: 'value'},
      series: [{
          name: 'Visits',
          type: 'bar',
          // data: [120, 200, 150, 80, 70, 110, 130],
        data: [12000, 8500, 4300, 9800, 6700],
        itemStyle: {
          color: '#28a745' // Custom color for the bars
        }
        }]
      },
      initOption: {
        renderer: 'canvas'
      }
    }
  }
