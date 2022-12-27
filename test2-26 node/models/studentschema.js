const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 
 
 const studentSchema = new Schema({
    studentId:{type: String, required : true, unique:true},
    classId:{type: String, required : true, unique:true},
    name: {type: String, required : true}

 }, {timestamps : true})

const studentModel = mongoose.model("Student",studentSchema);
module.exports = studentModel;



