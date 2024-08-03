import type { Meta, StoryObj } from "@storybook/react"
import Button, { ButtonProps} from "./Button"

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  parameters: {
    design: {
      type: 'figma.com/file/GBTbEDKz1uX0FMftBlc7nC/NeoITO-file?type=design&node-id=1-158&t=qEMXgESrzsfJnGMo-0',
    },
  },
}

type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: (args: ButtonProps) => <Button {...args} />,
}

export default meta
