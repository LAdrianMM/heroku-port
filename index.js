require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(express.static(path.join(__dirname, 'client/build')));

// importing routes
const Mail = require('./routes/mail')

const port = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(cors())

app.use("/api", Mail)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
}
);



app.listen(port, () => {
  console.log('server running at port '+ port)
}) 