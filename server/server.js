import express from 'express'
import config from './config'

const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  res.render('index', { message: 21 })
})
app.listen(config.port, () => {
  console.log(`Running at http://localhost:${config.port}`)
})
