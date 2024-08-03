import type { Meta, StoryObj } from "@storybook/react"
import Text, { TextProps } from "./Text"

const meta: Meta<typeof Text> = {
  title: "Text",
  component: Text,
  parameters: {
    design: {
      type: 'figma.com/file/GBTbEDKz1uX0FMftBlc7nC/NeoITO-file?type=design&node-id=1-158&t=qEMXgESrzsfJnGMo-0',
    },
  },
}

type Story = StoryObj<typeof Text>

export const Default: Story = {
  render: (args: TextProps) => <Text {...args} />,
}

export default meta
