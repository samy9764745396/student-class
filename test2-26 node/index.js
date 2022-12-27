const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Student = require('./models/studentschema')
const app = express()

mongoose.connect('mongodb://localhost:27017/class')
    .then(console.log("connected successfully"))
    .catch(console.error);

app.use(bodyParser.json())

app.get('/', async (req, res) => {
    try{
        const students = await Student.find()
        res.status(200).json({
            status: "Sucess",
            data: students
        })
    }
    catch(e){
        res.status(500).json({
            status:failed,
            message:e.message
    
        })
    }
})

app.post("/post", async(req, res)=>{
     try{
const students = await Student.create(req.body)
res.status(200).json({
    status: "Sucess",
    students
})
     }
     catch(e){
        res.status(500).json({
            status:failed,
            message:e.message
     })
    }
})

app.get('/:id', async (req, res) => {
    try{
        const students = await Student.find({ _id: req.params.id })
        res.status(200).json({
            status: "Sucess",
            data: students
        })
    }
    catch(e){
        res.status(500).json({
            status:"failed",
            message:e.message
    
        })
    }
})

app.delete("/:id", async (req, res) => {
    try {
        // Code to update the document
        const students = await Student.deleteOne({ _id: req.params.id });

        res.status(200).json({
            status: "Sucess",
            students
        })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});


// app.get('/', function (req, res) {
//     res.send('Hello World')
// })

app.listen(3000, console.log("app running at port 3000"))

