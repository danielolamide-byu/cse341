
// // // // // const express = require('express');
// // // // // const app = express();
 
// // // // // app.get('/', (req, res) => {
// // // // //   res.send("Hello");
// // // // // });

const express = require('express');

const mongodb = require('./data/database');
const app = express();

const port = process.env.PORT || 3000; 

app.use('/', require('./routes'))
 
mongodb.initdb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(process.env.PORT || 3001, () => {
      console.log('Web Server is listening at port ' + (process.env.PORT || 3001));
    })
  }
});

    app.listen(port, () => {
      console.log("Database listening...")
    });

// app.listen(process.env.PORT || 3000, () => {
//   console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
// });





// // // const express = require("express")
// // // const app = express()
// // // const router = express.Router();

// // // router.use((req, res, next) => {
// // //   console.log(Date.now());
// // //   next();
// // // })

// // // router.get('/home', (req, res) => {
// // //   res.send("Homepage.")
// // // });

// // // router.get('/profile', (req, res) => {
// // //   res.send("This is the profile.")
// // // });


// // // app.use('/', router);
// // // app.use((err, req, res, next) => {
// // //   res.status(500).send('Something broke!')
// // // });




// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const app = express();
// // const router = express.Router();
 
// // router.get('/home', (req, res) => {
// //   res.send('Hello World, This is home router');
// // });
 
// // router.get('/profile', (req, res) => {
// //   res.send('Hello World, This is profile router');
// // });
 
// // router.get('/login', (req, res) => {
// //   res.send('Hello World, This is login router');
// // });
 
// // router.get('/logout', (req, res) => {
// //   res.send('Hello World, This is logout router');
// // });
 
// // // Add middleware before routes
// // app.use(bodyParser.json());
// // app.use('/', router);
 
// // app.listen(process.env.PORT || 3000, () => {
// //   console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
// // });



// var express = require("express");
// var bodyParser = require("body-parser");
// var multer = require('multer');
 
// var app = express();
// app.use(bodyParser.json());
 
// var storage = multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, './uploads');
//   },
//   filename: function (req, file, callback) {
//     callback(null, file.fieldname + '-' + Date.now());
//   }
// });
 
// var upload = multer({ storage: storage }).array('userPhoto', 2);
 
// app.post('/api/photo', function (req, res) {
//   upload(req, res, function (err) {
//     if (err) {
//       return res.end("Error uploading file.");
//     }
//     res.end("File is uploaded");
//   });
// });
 
// app.listen(3000, function () {
//   console.log("Working on port 3000");
// });

// const mysql = require('mysql');
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'user',
//     password: 'password',
//     database: 'express'
// });
 
// connection.connect((err) => {
//     if (err) throw err;
//     console.log('Connected to MySQL Server!');
// });

// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
