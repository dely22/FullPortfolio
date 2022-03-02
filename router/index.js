const { Router } = require('express');
const assert = require("assert")
const multer = require('multer');
const path = require('path');
const Service = require('../models/schema');
const Skills = require('../models/skil');
const router = Router();

// Dashboard page
router.get('/', function(req, res, next) {
  res.render('profaile', {
    title: ' User porfilo ',
  });
});
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



















module.exports = router;
