// connect db
const db = require('./db');


// Experince schema
const ExperinceSchema = new db.Schema({
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
const Experince = db.model('Experince', ExperinceSchema);
module.exports = Experince;

