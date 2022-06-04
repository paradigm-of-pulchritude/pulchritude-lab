import { InjectedStyleConfig } from "../src";

export const storybookTheme: InjectedStyleConfig = {
  color: {
    primary: '#5533ff',
    warning: '#f7bf08',
    error: '#d11029',
    info: '#52c5ff',
    success: '#068e3c',
    processing: '#51d8e1',
    background: {
      wild: {
        base: '#b999ff',
        gradient: `
          radial-gradient(at 85% 26%, hsla(11,97%,73%,1) 0, transparent 53%),
          radial-gradient(at 65% 5%, hsla(284,82%,61%,1) 0, transparent 56%),
          radial-gradient(at 57% 76%, hsla(12,72%,86%,1) 0, transparent 45%),
          radial-gradient(at 29% 18%, hsla(85,77%,90%,1) 0, transparent 54%),
          radial-gradient(at 13% 98%, hsla(12,95%,85%,1) 0, transparent 42%)
        `,
      },
      mild: {
        base: 'linear-gradient(349deg, rgba(212,217,241,1) 18%, rgba(252,234,255,1) 83%)',
      },
    },
  },
  radius: {
    button: '0.5rem',
    field: '0.5rem',
    card: '1rem',
  },
  shadow: {
    button: {
      primary:
        'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
    },
    card: {
      normal:
        'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
    },
  }
}
