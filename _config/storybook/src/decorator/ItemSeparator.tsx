export const ItemSeparator = (Story: any) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignContent: 'flex-start',
      gap: '10px 10px',
      padding: 10,
      overflow: 'auto',
    }}
  >
    {Story()}
  </div>
)
