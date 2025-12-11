import type {Meta, StoryObj} from '@storybook/react-vite';
import Card from "./Card";

const meta = {
    component: Card,
} satisfies Meta<typeof Card>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Card Title',
        description: 'Card Description',
        buttonLabel: '$600',
        action: () => console.log('Card action'),
    }
}