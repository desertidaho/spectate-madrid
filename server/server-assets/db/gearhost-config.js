var mongoose = require('mongoose')
var connectionString = "mongodb://spectatemadrid:Sq4E6x~7N~7H@den1.mongo1.gear.host:27001/spectatemadrid"
var connection = mongoose.connection

mongoose.connect(connectionString, { useNewUrlParser: true })

connection.on('error', err => {
  console.log('ERROR FROM DATABASE: ', err)
})

connection.once('open', () => {
  console.log('Connected to Database')
})