const constants = require('../constants');
const NotionTranslation = require('./NotionTranslation');
const notionApi = require('../services/api');

class TranslationGenerator {
  constructor(page) {
    this.page = page
  }

  async execute() {
    try {
      const requestTranslationResponse = await notionApi(constants.NOTION_TRANSLATE_DATABASE, this.page)
      .get
  
    const responseTranslation = await requestTranslationResponse
    
    const translate = new NotionTranslation(responseTranslation.data).transform
  
    return translate
    } catch(e) {
      console.log('error api ' + e)
    }
  }
}

module.exports = TranslationGenerator
