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

// Services schema
const ServiceSchema = new mongoose.Schema({
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
const Service = mongoose.model('Service', ServiceSchema);
module.exports = Service;
