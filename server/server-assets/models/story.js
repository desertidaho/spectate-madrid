let mongoose = require('mongoose')
let Schema = mongoose.Schema


let schema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  story: { type: String, required: true },
}, { timestamps: true })


module.exports = mongoose.model('Story', schema)