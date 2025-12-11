import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from "./Button";

const meta = {
    component: Button,
    args: {
        onClick: () => console.log('click'),
        type: 'primary',
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Big: Story = {
    args:{
        label: 'Big Button',
        size: 'lg',
    },
};
export const Middle: Story = {
    args: {
        label: 'Middle Button',
        size: 'md',
    },
};
export const Small: Story = {
    args: {
        label: 'Small Button',
        size: 'sm',
    },
};
export const withIcon: Story = {
    args: {
        label: 'With icon',
        size: 'sm',
        icon: 'icon',
        iconOnly: false,
    },
};
