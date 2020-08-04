const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const mockUserData = [
  {name:'Mark'},
  {name:'Jill'}
]

app.get('/users', function(req, res){
  res.json({
    success: true,
    message: 'successfully got users. Nice!',
    users: mockUserData
  })
})

app.get('/users/:id', function(req, res){
  console.log(req.params.id)
  res.json({
    success: true,
    message: 'got one user',
    user: req.params.id
  })
})

app.post('/login', function(req, res){
  // Passwords are normally encrypted before sending to db, e.g. with bcrypt
  const username=req.body.username;
  const password=req.body.password;

  // Normally comes from database
  const mockUsername="billyTheKid";
  const mockPasssord="superSecret";

  if (username===mockUsername && password===mockPassword){
    // In production, use JSON web token sign method to make encrypted token
    res.json({
      success: true,
      message: "password and username match!",
      token: "encrypted token goes here"
    })
  }
  else {
    res.json({
      success: false,
      message: "password and username do not match"
    })
  }
})

app.listen(8000, function(){
  console.log("server is running")
})
