// connect db
const db = require('./db');

const aboutSchema = new db.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  hello_name:{
    type: String ,
    required:true,
  },
  job:{
    type: String,
    required: true 
    },
  bio:{
    type: String,
    required: true 
    },
  img:{
    type: String,
    required: true 
    },
   cv:{
    type: String,
    required: true 
  }
 
});
const About = db.model('about', aboutSchema);
module.exports = About;