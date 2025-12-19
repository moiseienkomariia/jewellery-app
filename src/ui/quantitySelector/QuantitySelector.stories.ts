import type { Meta, StoryObj } from '@storybook/react-vite';
import QuantitySelector from "./QuantitySelector";

const meta = {
    component: QuantitySelector,
} satisfies Meta<typeof QuantitySelector>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args: {
        value: '1',
        onDecrement: () => console.log('decrement'),
        onIncrement: () => console.log('increment'),
    }
};