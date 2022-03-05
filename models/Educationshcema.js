const db = require('./db');

// Education schema
const EducationeSchema = new db.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  Education_period:{
      type: String,
      required:true,
  },
  Education_name:{
      type: String,
      required: true,
    },
    Education_describe:{
      type: String,
      required: true,
  },
  is_active: {
    type: Boolean,
     default: 1
    },
});
const Educatione = db.model('Educatione', EducationeSchema);
module.exports = Educatione;

