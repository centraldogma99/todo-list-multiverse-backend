import express, { type Application, type Request, type Response } from 'express'

const app: Application = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})
