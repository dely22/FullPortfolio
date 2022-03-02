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

const SkillSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  skill_name:{
    type: String ,
    required:true,
  },
  progress_percent:{
    type: Number,
    required: true 
  },
  is_active: {
    type: Boolean,
     default: 1 },
});
const Skill = mongoose.model('Skill', SkillSchema);
module.exports = Skill;