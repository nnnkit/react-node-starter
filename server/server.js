const express = require('express')
const app = express()
const config = require('./config')

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  res.render('index', { message: 21 })
})
app.listen(config.port, () => {
  console.log(`Running at http://localhost:${config.port}`)
})
