import type { Meta } from "@storybook/react-vite";
import { Elevation, type ElevationProps } from "./Elevation";

const meta = {
  component: Elevation,
  args: {
    standalone: true,
  },
} satisfies Meta<typeof Elevation>;

export default meta;

const Template = (args: ElevationProps) => {
  return (
    <Elevation {...args}>
      <div className="my-div">Test value</div>
    </Elevation>
  );
};

export const Default = Template.bind({});
