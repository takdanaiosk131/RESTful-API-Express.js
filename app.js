const express = require('express')
const bodyParser = require('body-parser')
const userRouter = require('./userRouter')
const app = express();

const port = 3001
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api',userRouter)

app.listen(port, () => console.log(`Start Server ${port}`))