import I18n from 'i18n-js'
import en from 'locales/en.json'
import ru from 'locales/ru.json'
import * as RNLocalize from 'react-native-localize'
import { store } from 'state'

const locales = RNLocalize.getLocales()

if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageTag
}

I18n.pluralization.ru = (count: number) => {
  const key =
    count % 10 === 1 && count % 100 !== 11
      ? 'one'
      : [2, 3, 4].indexOf(count % 10) >= 0 &&
        [12, 13, 14].indexOf(count % 100) < 0
      ? 'few'
      : count % 10 === 0 ||
        [5, 6, 7, 8, 9].indexOf(count % 10) >= 0 ||
        [11, 12, 13, 14].indexOf(count % 100) >= 0
      ? 'many'
      : 'other'
  return [key]
}

I18n.defaultLocale = 'ru'
I18n.fallbacks = true
I18n.translations = {
  ru,
  en,
}

const lang = (key: I18n.Scope, optional = {}) =>
  I18n.t(key, { locale: store.getState().user?.language || 'ru', ...optional })

export { lang }
