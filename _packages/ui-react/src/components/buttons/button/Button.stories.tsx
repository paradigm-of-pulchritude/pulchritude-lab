import { ItemSeparator, Meta, Story, userEvent, within, expect } from 'config.storybook'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Buttons/Button',
  component: Button,
  decorators: [ItemSeparator],
}

const Template: Story<typeof Button> = args => <Button {...args} />

export const Playground = Template.bind({})

Playground.play = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement)
  const button = canvas.getByRole('button')
  await userEvent.click(button)
  await expect(args.onClick).toHaveBeenCalled()
}

export default meta
