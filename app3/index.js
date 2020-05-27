const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World! page index'))
app.get('/lol', (req, res) => res.send('Hello World! page lol'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
