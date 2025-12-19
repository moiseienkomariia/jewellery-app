import type { Meta, StoryObj } from '@storybook/react-vite';
import SearchField from './SearchField';

const meta = {
    component: SearchField,
} satisfies Meta<typeof SearchField>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args:{
        value: '',
        placeholder: 'Search',
        onChange: () => console.log('value changed'),
    },
};