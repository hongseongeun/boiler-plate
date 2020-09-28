const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://hseun012:imsi00.!@cluster0.5qqvj.mongodb.net/test', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connented....'))
.catch(err => console.log(err))






app.get('/', (req, res) => {
  res.send('Hello World! ~~~~~~')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})