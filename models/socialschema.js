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
const SocialSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  Media_icon:{
      type: String,
      required:true,
  },
 
  Media_url:{
      type: String,
      required: true,
  },
  is_active: {
    type: Boolean,
     default: 1
    },
});
const Social = mongoose.model('Social', SocialSchema);
module.exports = Social;

