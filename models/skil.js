// connect db
const db = require('./db');

const SkillSchema = new db.Schema({
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
const Skill = db.model('Skill', SkillSchema);
module.exports = Skill;