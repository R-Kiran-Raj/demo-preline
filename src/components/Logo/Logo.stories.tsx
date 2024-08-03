import type { Meta, StoryObj } from "@storybook/react";
import Logo from "./Logo";

const meta: Meta<typeof Logo> = {
  title: "Logo",
  component: Logo,
  parameters: {
    design: {
      type: "figma.com/file/GBTbEDKz1uX0FMftBlc7nC/NeoITO-file?type=design&node-id=1-158&t=qEMXgESrzsfJnGMo-0",
    },
  },
};

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  render: () => <Logo />,
};

export default meta;
