import type { Meta, StoryObj } from "@storybook/react";
import Icon from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Icon",
  component: Icon,
  parameters: {
    design: {
      type: "figma.com/file/GBTbEDKz1uX0FMftBlc7nC/NeoITO-file?type=design&node-id=1-158&t=qEMXgESrzsfJnGMo-0",
    },
  },
};

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  render: () => <Icon />,
};

export default meta;
