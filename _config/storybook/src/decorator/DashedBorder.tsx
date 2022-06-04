export const DashedBorder = (Story: any, e: any) => {
  return (
    <div
      style={{
        outlineColor: '#bdc000',
        outlineStyle: 'dashed',
        outlineWidth: '1px',
      }}
    >
      {Story()}
    </div>
  )
}
