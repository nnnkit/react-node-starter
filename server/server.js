const express = require('express')
const app = express()
const config = require('./config')

app.use(express.static('public'))
app.get('/', (req, res) => {
  res.send({ main: 'Hello' })
})
app.listen(config.port, () => {
  console.log(`Running at http://localhost:${config.port}`)
})
