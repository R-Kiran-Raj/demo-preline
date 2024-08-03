import type { Meta, StoryObj } from "@storybook/react"
import DynamicInputField, { DynamicInputFieldProps} from "./DynamicInputField"

const meta: Meta<typeof DynamicInputField> = {
  title: "DynamicInputField",
  component: DynamicInputField,
  parameters: {
    design: {
      type: 'figma.com/file/GBTbEDKz1uX0FMftBlc7nC/NeoITO-file?type=design&node-id=1-158&t=qEMXgESrzsfJnGMo-0',
    },
  },
}

type Story = StoryObj<typeof DynamicInputField>

export const Default: Story = {
  render: (args: DynamicInputFieldProps) => <DynamicInputField {...args} />,
}

export default meta
