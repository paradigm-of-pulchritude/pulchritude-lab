// import 'antd/dist/antd.variable.min.css'
// import '../src/style/index.scss'
// import { INJECT_STYLE_CONFIG, UiConfigProvider } from '../src'
// import { i18n, Language } from 'pkg.translations'
import { preview } from 'config.storybook'
// import { storybookTheme } from './theme'

// INJECT_STYLE_CONFIG(storybookTheme)

export const decorators = [
  (Story: any, context: any) => {
    // i18n.changeLanguage(context.globals.language)

    return (
      <div style={{ paddingBottom: '2rem', minHeight: '10rem' }}>
        {/* <UiConfigProvider> */}
          <Story />
        {/* </UiConfigProvider> */}
      </div>
    )
  },
]

export const globalTypes = {
  // language: {
  //   name: 'Language',
  //   description: 'Language',
  //   defaultValue: Language.EN,
  //   toolbar: {
  //     icon: 'globe',
  //     items: Object.values(Language).map(lang => ({
  //       value: lang,
  //       right: lang.toUpperCase(),
  //       title: i18n.t('language:' + lang),
  //     })),
  //   },
  // },
}

export const parameters = preview.parameters
