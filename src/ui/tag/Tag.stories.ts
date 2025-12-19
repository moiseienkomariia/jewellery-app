import type { Meta, StoryObj } from '@storybook/react-vite';
import Tag from "./Tag";

const meta = {
    component: Tag,
    args: {
        label: 'Tag',
        action: () => console.log('click'),
    },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
    args: {
        type: 'active',
    },
};
export const Inactive: Story = {
    args: {
        type: 'inactive',
    },
};