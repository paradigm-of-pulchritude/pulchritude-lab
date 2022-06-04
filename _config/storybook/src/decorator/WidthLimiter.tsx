export const WidthLimiter = (width: number) => (Story: any) =>
  <div style={{ maxWidth: width }}>{Story()}</div>
