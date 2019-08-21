const express = require("express")
const app = express()
const fs = require('fs')
const knex = require('./connectDB');

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
    // let data = fs.readFileSync('data.json')
    // data = data.toString();
    // let Data = JSON.parse(data)
    // user.id = Data.length + 1;
    // Data.push(user)
    // fs.writeFileSync("data.json", JSON.stringify(Data,null,2))
    return res.json(user)

})

app.listen(3000, () => console.log('server is listening'));