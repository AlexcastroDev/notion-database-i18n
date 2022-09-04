require('dotenv').config()


const NOTION_TRANSLATE_DATABASE = process.env.NOTION_TRANSLATE_DATABASE
const NOTION_API_KEY = process.env.NOTION_API_KEY

module.exports = {
    NOTION_TRANSLATE_DATABASE,
    NOTION_API_KEY
}