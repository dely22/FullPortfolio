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
// app.use(express.static('public/images'));
// // route

// app.get("/", (req, res) => {
//     res.render("profaile");
// })
// app.get("/portofront", (req, res) => {
//     res.render("portofront");
// })
// app.get("/login", (req, res) => {
//     res.render("login");
// })
// // app.listen(process.env.PORT || 5000);

// app.get('*', (req, res) => {
//     res.statusCode = 404;
//   	res.end(' Sorry, page not found');
// })

// app.listen(process.env.PORT || 4000, () => {
//     console.log('Server running at http://127.0.0.1:4000');
// })