import { FC } from 'react'

export interface ButtonProps {
  label: string
  onClick: () => void
}
export const Button: FC<ButtonProps> = props => {
  const { label, onClick } = props

  return <button onClick={onClick}>{label}</button>
}

Button.defaultProps = { label: 'Button' }
