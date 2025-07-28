import { Meta, StoryObj } from '@storybook/angular';
import {LineChartComponent} from "./line-chart.component";

const meta: Meta<LineChartComponent> = {
  title: 'Example/LineChart',
  component: LineChartComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<LineChartComponent>;

export const Primary: Story = {
  args: {
  },
};
