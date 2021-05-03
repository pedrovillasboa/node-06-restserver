require('dotenv').config();
const express = require('express')
const app = express()
app.use(express.json());

const port = process.env.PORT; 
 
app.get('/users', (req, res) => {
const users = [
    {
        id:1,
        name:'pedro',
    },
    {
        id:2,
        name: 'betty',
    }
]

    res.json(users);
  })
 
  app.post('/users', (req, res)=> {
const user = req.body;
user.id=86546
console.log(`post whit body :${req.body}`);
    const result ={
      messsage : 'User created',
      user
    }
    res.json(result);
  })
 
  app.put('/users', (req, res)=> {
 const { id } = req.params;
 const user = req.body;
 user.id = id;

    const   result = {
      message:'User update',
      user
    }
    res.json(result);
  })
  
app.patch('/users',  (req, res)=> {
  const result = {
    message:'user updated wit patch'
  }
    res.json(result);
  })
  
app.delete('/users/:id',  (req, res)=> {
  const {id }= req.params;

    const result = {
        message:`users whit id : ${id} delete`
    }
    res.json(result);
  })
        


 
app.listen(port,() =>{
console.log(`****app started PORT: ${port}****`)

});






