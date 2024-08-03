import type { Meta, StoryObj } from "@storybook/react"
import Input, { InputProps } from "./Input"

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  parameters: {
    design: {
      type: 'figma.com/file/GBTbEDKz1uX0FMftBlc7nC/NeoITO-file?type=design&node-id=1-158&t=qEMXgESrzsfJnGMo-0',
    },
  },
}

type Story = StoryObj<typeof Input>

export const Default: Story = {
  render: (args: InputProps) => <Input {...args} />,
}

export default meta
