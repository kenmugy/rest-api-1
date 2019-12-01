const express = require('express')

const app = express()

const port = process.env.PORT || '1233'

app.get('/', (req, res) => res.json({"type": "GET"}))

app.listen(port, ()=> console.log(`listening on port ${port}`))