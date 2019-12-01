const express = require('express')

const app = express()

const port = process.env.PORT || '1233'
app.use(express.json())

const Ninja = require('./models/ninjaModel')
const ninjaRoute = require('./routes/ninjaRoute')(Ninja)

app.use('/api/ninjas', ninjaRoute)

app.listen(port, ()=> console.log(`listening on port ${port}`))