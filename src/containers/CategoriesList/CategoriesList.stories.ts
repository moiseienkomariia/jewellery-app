import type { Meta, StoryObj } from '@storybook/react-vite';
import { CategoriesList } from "./CategoriesList";

const meta = {
    component: CategoriesList,
} satisfies Meta<typeof CategoriesList>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        icon: 'icon'
    }
}