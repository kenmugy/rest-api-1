const express = require('express')

const app = express()

const port = process.env.PORT || '1233'
app.use(express.json())

const ninjaRoute = require('./routes/ninjaRoute')()

app.use('/api/ninjas', ninjaRoute)

app.listen(port, ()=> console.log(`listening on port ${port}`))