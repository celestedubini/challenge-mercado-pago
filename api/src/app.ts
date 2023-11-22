import express, { type Request, type Response } from 'express'
import cors from 'cors'
import jsonData from '../data.json'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running')
})

app.get('/api/data', (req: Request, res: Response) => {
  res.json(jsonData)
})

app.get('/api/data/:id', (req: Request, res: Response) => {
  const itemId = req.params.id
  const item = jsonData.find((item) => item.id === Number(itemId))

  if (item !== undefined && item !== null) {
    res.json(item)
  } else {
    res.status(404).json({ error: 'Item not found' })
  }
})

const APP_PORT = 3001

app.listen(APP_PORT, () => {
  console.log(`Server started on port ${APP_PORT}`)
})
