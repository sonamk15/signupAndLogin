const express = require("express")
const app = express()
const fs = require('fs')
const knex = require('./connectDB');
const connection = require('./connectDB');

app.use(express.json());
app.post("/signup",(req,res,next)=>{
    const user = {
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    }
    knex('users').insert(user).then(() => {
        console.log("done")
    })
    return res.json(user)

})

app.post("/login",(request,response,next)=>{
    var email = request.body.email;
    console.log(email)
    var password = request.body.password;
    console.log(password)
    knex('users').select('*').then((loginData) => {
        for (let index = 0; index < loginData.length; index++) {
            if (loginData[index].email===email && loginData[index].password===password){
                console.log(loginData[index].username,"cong.... you are logined in ")
                response.send(loginData[index].username+"  cong.... you are logined in ")
            }else{
                console.log("check your email and password")
                response.send("check your email and password")
            }
            
        }
        
    });
});



app.listen(3000, () => console.log('server is listening'));