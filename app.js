// const express = require("express");
// const path = require('path');
// const app = express();

// const initial_path = path.join(__dirname, "public");

// app.use(express.static(initial_path));
// app.set('views', 'views');
// app.set('view engine', 'ejs');

// app.use(express.static('public/css'));
// app.use(express.static('public/js'));
// app.use(express.static('public/img'));
// // route
// // skills start
// const Skills = require('./models/dash-skills');
// // Skills page
// app.get('/dash-Skill', function(req, res, next) {
//   Skills.find().then((result)=>{
//     res.render('dash-skills', {skills:result});
//   console.log(result);
//   })
// });
//   //Add new skill to the view in the data tables section
// app.post('/addskills', function(req, res, next) {
//   var skillDetails = new Skills({
//     skill_name: req.body.skill_name,
//     progress_percent: req.body.progress_percent,
   
//   });
   
//   skillDetails.save();
        
// console.log("skill was add")
// res.redirect('/dash-Skill');

// });

// // Edit Skills
// app.post('/Edit_skills', function(req, res, next){
  
//   var item = {
//     skill_name: req.body.skill_name,
//     progress_percent: req.body.progress_percent,
   
//   };
//   var id = req.body.id;
//   Skills.updateMany({"_id": id}, {$set: item}, item, function(err, result){
   
//     console.log("item updated");
//     console.log(item);
//   })
//   res.redirect('/dash-Skill');
// });
// //Delete skill item

// app.get('/delete_skill/:id',function(req,res,next){
//   Skills.deleteOne({"_id":req.params.id},function(err,result){
//     console.log("item deleted");
//   })
//   res.redirect('/dash-Skill');

// });

// // skills End


// app.get("/", (req, res) => {
//     res.render("profaile");
// })
// app.get("/login", (req, res) => {
//     res.render("login");
// })
// // app.listen(process.env.PORT || 5000);

// app.get('*', (req, res) => {
//     res.statusCode = 404;
//   	res.end(' Sorry, page not found');
// })

// app.listen(process.env.PORT || 5000, () => {
//     console.log('Server running at http://127.0.0.1:5000');
// })