export const HeightLimiter = (height: number) => (Story: any) =>
  <div style={{ maxHeight: height }}>{Story()}</div>
