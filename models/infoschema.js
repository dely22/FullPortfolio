// connect db
const db = require('./db');


// Experince schema
const infoschema = new db.Schema({
   createdAt: {
    type: Date,
    default: Date.now,
  },
  fullname: {
    type: String,
    required: true,
    },
  Summary: {
      type: String,
    required: true,
  },
   Address: {
    type: String,
    required: true,
  },
   birth: {
       type: String,
       required: true,
  },
  Degree: {
    type: String,
    required: true,
    },
    freelance: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  is_active: {
    type: Boolean,
    default: 1 }
    
});
const Infom = db.model('info', infoschema);
module.exports = Infom;

