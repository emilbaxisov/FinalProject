const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const {Schema} = mongoose
const userSchema = new mongoose.Schema({
    imgUrl:{type:String,require:true},
    name:{type:String,require:true},
    job:{type:String,require:true},
    age:{type:Number,require:true}
    
})
const app = express()
const port = 8000
const Users = mongoose.model('users',userSchema)
app.use(cors())
app.use(bodyParser.json())

app.get('/users', (req, res) => {
  Users.find({},(err,docs)=>{
    if(!err){
        res.send(docs)
    }
  })
})

app.get('/users/:id', (req, res) => {
    const {id} = req.params
    Users.findById(id,(err,docs)=>{
        if(!err){
            if(docs){
                res.send(docs)
            }
        }
    })
  })

  app.delete('/users/:id', (req, res) => {
    const {id} = req.params
    Users.findByIdAndDelete(id,(err)=>{
        if(!err){
            res.send('delete')
        }
    })
  })

  app.post('/users/', (req, res) => {
    let user = new Users({
        imgUrl:req.body.imgUrl,
        name:req.body.name,
        job:req.body.job,
        age:req.body.age

    })
    user.save()
    res.send("a")
  })

mongoose.connect("mongodb+srv://tu74k8ckg:12345@cluster0.buc5fjp.mongodb.net/AF202Final?retryWrites=true&w=majority")
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})