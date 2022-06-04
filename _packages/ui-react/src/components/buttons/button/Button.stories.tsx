import { ItemSeparator, Meta, Story } from 'config.storybook'

import { Button, ButtonProps } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Buttons/Button',
  component: Button,
  decorators: [ItemSeparator],
  parameters: {
    badges: ['stable'],
  },
}

const Template: Story<typeof Button> = args => <Button {...args} />

export const Playground = Template.bind({})
Playground.args = {
  label: 'Button',
} as ButtonProps

export default meta
