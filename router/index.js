const { Router } = require('express');
const assert = require("assert")
const multer = require('multer');
const path = require('path');
const Service = require('../models/schema');
const Skills = require('../models/skil');
const Social = require('../models/socialschema');
const Experience = require('../models/Experschema');
const Education = require('../models/Educationshcema');
const User = require('../models/user');
const About = require('../models/about');
const Proj = require('../models/proj');

const router = Router();

//  GET  Data ToPORTFOLIO page. 
router.get('/portofront', async (req, res) => {
  const Abouts = await About.find();
  const Users= await User.find();
  const Skils= await Skills.find();
  const educa = await Education.find();
  const Experien = await Experience.find();
  const service = await Service.find();
  const social = await Social.find();
  const Projy = await Proj.find();
  //  result : variable
  res.render('portofront', { About: Abouts, User:Users, skills:Skils, Education:educa,Experinc:Experien, Service:service,Projects:Projy, Media:social  })
});



// Dashboard page
// router.get('/', function(req, res, next) {
//   res.render('profaile', {
//     title: ' User porfilo ',
//   });
// });
router.get('/profaile', function(req, res, next) {
  res.render('profaile', {
    title: ' User porfilo ',
  });
});

// portfolio page
router.get('/portofront', function(req, res, next) {
  res.render('portofront', {
    title: ' Hadeel',
  });
});
// Login page
router.get("/login", (req, res) => {
    res.render("login", {
        title: ' LogIn Page',
    });
});

// Service page
router.get('/services', function(req, res, next) {
  Service.find().then((result)=>{
    res.render('services', { Service:result});
  console.log(result);
  })
  });


// add Service
router.post('/addservice', function(req, res, next) {
     try{
      var serviceDetails = new Service({
            service_icon: req.body.service_icon,
            service_name:req.body.service_name,
        });
        serviceDetails.save();
        console.log("Service was add")
        res.redirect('/services');
     }catch{
        console.log("Error in add process")
     }
});

// Edit service
router.post('/Edit_service', function(req, res, next){
  var item = {
        service_icon: req.body.service_icon,
        service_name:req.body.service_name,
    };
  var id = req.body.id;
  Service.updateMany({"_id": id}, {$set: item}, item, function(err, result){
    console.log("item updated");
    console.log(item);
  })
  res.redirect('/services');
});

//Delete service
router.get('/delete_service/:id',function(req,res,next){
  Service.deleteOne({"_id":req.params.id},function(err,result){
    console.log("item deleted");
  })
  res.redirect('/services');
});



// Projects page
router.get('/projects', function(req, res, next) {
  Proj.find().then((result)=>{
    res.render('Projects', { Projects:result});
  console.log(result);
  })
  });


// add Projects
router.post('/addProjects', function(req, res, next) {
     try{
      var projectseDetails = new Proj({
            img: req.body.img,
            url:req.body.url,
            desc:req.body.desc,
        });
        projectseDetails.save();
        console.log("Projects was add")
        res.redirect('/projects');
     }catch{
        console.log("Error in add process")
     }
});

// Edit Projects
router.post('/Edit_Projects', function(req, res, next){
  var item = {
        img: req.body.img,
        url:req.body.url,
        desc:req.body.desc,
    };
  var id = req.body.id;
  Proj.updateMany({"_id": id}, {$set: item}, item, function(err, result){
    console.log("item updated");
    console.log(item);
  })
  res.redirect('/projects');
});

//Delete Projects
router.get('/delete_Projects/:id',function(req,res,next){
  Proj.deleteOne({"_id":req.params.id},function(err,result){
    console.log("item deleted");
  })
  res.redirect('/projects');
});






// Skills page
router.get('/skills', function(req, res, next) {
  Skills.find().then((result)=>{
    console.log(result);
    res.render('skills', { skills:result});
  })
  });
//Add skill 
router.post('/addskills', function(req, res, next) {
  var skillDetails = new Skills({
    skill_name: req.body.skill_name,
    progress_percent: req.body.progress_percent,
  });
   
  skillDetails.save();
        
console.log("skill was add")
res.redirect('/skills');

});

// Edit Skills
router.post('/Edit_skills', function(req, res, next){
  
  var item = {
    skill_name: req.body.skill_name,
    progress_percent: req.body.progress_percent,
  };
  var id = req.body.id;
  Skills.updateMany({"_id": id}, {$set: item}, item, function(err, result){
   
    console.log("item updated");
    console.log(item);
  })
  res.redirect('/skills');
});

//Delete skill item
router.get('/delete_skill/:id',function(req,res,next){
  Skills.deleteOne({"_id":req.params.id},function(err,result){
    console.log("item deleted");
  })
  res.redirect('/skills');
});

// Media page
router.get('/media', function(req, res, next) {
  Social.find().then((result)=>{
    res.render('social', { Media:result});
  console.log(result);
  })
  });
// add Media
router.post('/addmedia', function(req, res, next) {
  try {
      var MediaDetails = new Social({
          Media_icon: req.body.Media_icon,
          Media_url:req.body.Media_url
        });
        MediaDetails.save();
        console.log("media was add")
        res.redirect('/media');
     }catch{
        console.log("Error in add process")
     }
});

// Edit Media
router.post('/Edit_Media', function(req, res, next){
  var item = {
      Media_icon: req.body.Media_icon,
      Media_url:req.body.Media_url
    };
  var id = req.body.id;
  Social.updateMany({"_id": id}, {$set: item}, item, function(err, result){
    console.log("item updated");
    console.log(item);
  })
  res.redirect('/media');
});

//Delete Media
router.get('/delete_media/:id',function(req,res,next){
  Social.deleteOne({"_id":req.params.id},function(err,result){
    console.log("item deleted");
  })
  res.redirect('/media');
});

// Experince page
router.get('/Experience', function(req, res, next) {
  Experience.find().then((result)=>{
    res.render('Experience', { Experinc:result});
  console.log(result);
  })
  });
// add Media
router.post('/addExperinc', function(req, res, next) {
  try {
    var ExperDetails = new Experience({
          Experinc_period: req.body.Experinc_period,
          Experinc_name:req.body.Experinc_name,
          Experinc_describe: req.body.Experinc_describe
        });
        ExperDetails.save();
        console.log("media was add")
        res.redirect('/Experience');
     }catch{
        console.log("Error in add process")
     }
});

// Edit Experience
router.post('/Edit_Experinc', function(req, res, next){
  var item = {
      Experinc_period: req.body.Experinc_period,
          Experinc_name:req.body.Experinc_name,
          Experinc_describe: req.body.Experinc_describe
    };
  var id = req.body.id;
  Experience.updateMany({"_id": id}, {$set: item}, item, function(err, result){
    console.log("item updated");
    console.log(item);
  })
  res.redirect('/Experience');
});

//Delete Experience
router.get('/delete_Experinc/:id',function(req,res,next){
  Experience.deleteOne({"_id":req.params.id},function(err,result){
    console.log("item deleted");
  })
  res.redirect('/Experience');
});

// Education page
router.get('/Education', function(req, res, next) {
  Education.find().then((result)=>{
    res.render('Education', { Education:result});
  console.log(result);
  })
  });
// add Education
router.post('/addEducation', function(req, res, next) {
  try {
    var EducationDetails = new Education({
        Education_period: req.body.Education_period,
        Education_name:req.body.Education_name,
        Education_describe: req.body.Education_describe
        });
        EducationDetails.save();
        console.log("Education was add")
        res.redirect('/Education');
     }catch{
        console.log("Error in add process")
     }
});

// Edit Education
router.post('/Edit_Education', function(req, res, next){
  var item = {
      Education_period: req.body.Education_period,
      Education_name:req.body.Education_name,
      Education_describe: req.body.Education_describe
    };
  var id = req.body.id;
  Education.updateMany({"_id": id}, {$set: item}, item, function(err, result){
    console.log("item updated");
    console.log(item);
  })
  res.redirect('/Education');
});

//Delete Education
router.get('/delete_Education/:id',function(req,res,next){
  Education.deleteOne({"_id":req.params.id},function(err,result){
    console.log("item deleted");
  })
  res.redirect('/Education');
});

// user page
router.get('/user', function(req, res, next) {
  User.find().then((result)=>{
  res.render('User', { User:result});
  console.log(result);
  })
});

// Edit info
router.post('/Edit_User', function(req, res, next){
  var item = {
      fullname: req.body.fullname,
      Summary: req.body.Summary,
      Address: req.body.Address,
      birth: req.body.birth,
      Degree: req.body.Degree,
      freelance: req.body.freelance,
      phone: req.body.phone,
      email: req.body.email
    };
  var id = req.body.id;
  User.updateMany({"_id": id}, {$set: item}, item, function(err, result){
    console.log("item updated");
    console.log(item);
  })
  res.redirect('/user');
});


// About page
router.get('/home', function(req, res, next) {
  About.find().then((result)=>{
  res.render('profaile', { About:result});
  console.log(result);
  })
});
router.get('/', function(req, res, next) {
  About.find().then((result)=>{
  res.render('profaile', { About:result});
  console.log(result);
  })
});

// Edit info
router.post('/Edit_About', function(req, res, next){
  var item = {
      hello_name: req.body.hello_name,
      job: req.body.job,
      bio: req.body.bio,
      img: req.body.img,
      cv: req.body.cv
    };
  var id = req.body.id;
  About.updateMany({"_id": id}, {$set: item}, item, function(err, result){
    console.log("item updated");
    console.log(item);
  })
  res.redirect('/');
});




module.exports = router;