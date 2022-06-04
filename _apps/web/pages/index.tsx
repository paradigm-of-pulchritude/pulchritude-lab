import { Button } from 'pkg.ui-react'

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button
        label="BUTTON"
        onClick={() => {
          console.log('KKK')
        }}
      />
    </div>
  )
}
