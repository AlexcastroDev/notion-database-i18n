const get = require('lodash/get')

class NotionTranslation {
  constructor(data) {
    this.data = data
  }

  get transform() {
    const en = {}
    const pt = {}

    this.data.results.forEach((itemLang) => {
      const index = get(itemLang, 'properties.page.select.name', '')
      const translationKey = get(
        itemLang,
        'properties.name.title.0.plain_text',
        ''
      )
      const englishText = itemLang.properties.en_lang.rich_text
        .map((item) => item.plain_text)
        .join('')
      const portugueseText = itemLang.properties.pt_lang.rich_text
        .map((item) => item.plain_text)
        .join('')

      if (!en[index]) {
        en[index] = {}
      }
      if (!pt[index]) {
        pt[index] = {}
      }

      en[index][translationKey] = englishText
      pt[index][translationKey] = portugueseText
    })

    return { en, pt }
  }
}

module.exports = NotionTranslation