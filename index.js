require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')



// ** MIDDLEWARE ** //
const whitelist = ['http://localhost:3000', 'http://localhost:3001', 'https://damp-journey-34217.herokuapp.com' ]
const corsOptions = {
  origin: function (origin, callback) {
    console.log('** Origin of request ' + origin)
    if(whitelist.indexOf(origin) !== -1 || !origin) {
      console.log('Origin acceptable')
      callback(null, true)
    }else {
      console.log('Origin rejected')
      callback(new Error('Not allowed by CORS'))
    }
  }
}



// importing routes
const Mail = require('./routes/mail')


app.use(bodyParser.json())
app.use(cors(corsOptions))

app.use("/api", Mail)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
}
);

if(process.env.NODE_ENV === 'production'){
  //serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle REact routing, return all request to React app
  app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}


const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log('server running at port '+ port)
}) 