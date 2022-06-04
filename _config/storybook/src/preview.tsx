const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a: any, b: any) => {
      if (a[1].kind !== b[1].kind) {
        if (typeof a[1].kind === 'string' && typeof b[1].kind === 'string') {
          if (a[1].kind.includes('Summary') && !b[1].kind.includes('Summary')) return -1
          if (b[1].kind.includes('Summary') && !a[1].kind.includes('Summary')) return 1
        }
      }

      if (a[1].kind !== b[1].kind) {
        if (typeof a[0] === 'string' && typeof b[0] === 'string') {
          if (a[0].includes('⛔') && !b[0].includes('⛔')) return -1
          if (b[0].includes('⛔') && !a[0].includes('⛔')) return 1
        }
        return a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
      }
      if (a[1].name === 'Playground') return -1
      if (b[1].name === 'Playground') return 1
      return 0
    },
  },
  a11y: {
    element: '#root',
    config: {
      rules: [],
    },
    disable: false,
    options: {},
  },
}

export const preview = {
  parameters,
}
