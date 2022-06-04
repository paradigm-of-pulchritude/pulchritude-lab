import { Button } from 'pkg.ui-react'

export default function Docs() {
  return (
    <div>
      <h1>Docs</h1>
      <Button
        label="BUTTON"
        onClick={() => {
          console.log('KKK')
        }}
      />
    </div>
  )
}
