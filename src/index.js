const TranslationGenerator = require('./utils/requestTranslation')
const { join } = require("path")
const { writeFile } = require("fs/promises")
const { mkdirSync } = require("fs")

new TranslationGenerator('bookings').execute()

const translationBaseFolder = join(__dirname, "../", "output")

const mkdir = (folderLangName) => mkdirSync(translationBaseFolder + '/' + folderLangName, { recursive: true})


const write = (filename, data, lang) =>
  writeFile(join(translationBaseFolder, lang, filename), JSON.stringify(data))

;(async () => {
    ['pt', 'en'].forEach(lang => mkdir(lang))
    const translationData = new TranslationGenerator('bookings')
    const data = await translationData.execute()

    await write('bookings.json', data['en']['bookings'], 'en')
    await write('bookings.json', data['pt']['bookings'], 'pt')
})()