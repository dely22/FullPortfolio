
// connect db
const mongoose = require('mongoose');
const DB = 'mongodb://127.0.0.1:27017/portoDash';
mongoose
  .connect(DB, {
    autoIndex: true,
  })
  .then(() => {
    console.log('DB connected :)');
  });

// Education schema
const EducationeSchema = new mongoose.Schema({
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
const Educatione = mongoose.model('Educatione', EducationeSchema);
module.exports = Educatione;

