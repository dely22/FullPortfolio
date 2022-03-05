// connect db
const db = require('./db');

// Services schema
const ServiceSchema = new db.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  service_icon:{
    type:String,
    required:true,
  },
 
  service_name:{
    type:String,
  },
  is_active: {
    type: Boolean,
     default: 1
    },
});
const Service = db.model('Service', ServiceSchema);
module.exports = Service;

