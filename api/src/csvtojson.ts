import fs from 'fs'
import csvtojson from 'csvtojson'
import { type Converter } from 'csvtojson/v2/Converter'

const csvFilePath = 'src/data.csv'

interface Payments {
  id: number
  type: 'qr' | 'cash' | 'card'
  title: string
  description: string
  amount: string
}

type jsonArrayObjType = Payments[]

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const csvConverter: Converter<jsonArrayObjType> = csvtojson()

csvConverter.fromFile(csvFilePath)
  .then((jsonArrayObj: jsonArrayObjType) => {
    for (let i = 0; i < jsonArrayObj.length; i++) {
      jsonArrayObj[i].id = i + 1
    }

    const jsonContent = JSON.stringify(jsonArrayObj, null, 2)

    fs.writeFileSync('data.json', jsonContent)

    console.log('Conversion complete. JSON file created.')
  }).catch((err: Error) => {
    console.error(err)
  })
