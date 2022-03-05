// connect db
const db = require('./db');

const projSchema = new db.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
   img:{
    type: String,
    required: true 
    },
   url:{
    type: String,
    required: true 
  },
  desc:{
    type: String,
    required: true 
    }
});
const projects = db.model('project', projSchema);
module.exports = projects;