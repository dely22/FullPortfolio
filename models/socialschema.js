// connect db
const db = require('./db');

// Services schema
const SocialSchema = new db.Schema({
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
const Social = db.model('Social', SocialSchema);
module.exports = Social;

