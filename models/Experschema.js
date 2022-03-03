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

// Experince schema
const ExperinceSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  Experinc_period:{
      type: String,
      required:true,
  },
  Experinc_name:{
      type: String,
      required: true,
    },
    Experinc_describe:{
      type: String,
      required: true,
  },
  is_active: {
    type: Boolean,
     default: 1
    },
});
const Experince = mongoose.model('Experince', ExperinceSchema);
module.exports = Experince;

