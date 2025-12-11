import type {Meta, StoryObj} from '@storybook/react-vite';
import Totals from "./Totals";

const meta = {
    component: Totals,
} satisfies Meta<typeof Totals>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Payment',
        items: [
            {label: "Item total", value: "$1000"},
            {label: "Delivery fee", value: "$50"}
        ],
        summaryLabel: "Total",
        summaryValue: "1050",
    }
}