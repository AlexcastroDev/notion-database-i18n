const getNotionPageBody = require('../utils/getNotionPageBody')
const axios = require('axios')
const constants = require('../constants');

const notionApi = (database, page = 'general') => ({
  get get() {
    const body = getNotionPageBody(page)

    return axios.post(`https://api.notion.com/v1/databases/${database}/query`, body, {
      headers: {
        authorization: `Bearer ${constants.NOTION_API_KEY}`,
        'Notion-Version': '2022-02-22',
        'Content-Type': 'application/json',
      }
    })
  },
})

module.exports = notionApi