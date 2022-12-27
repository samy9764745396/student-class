const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 
 
 const classSchema = new Schema({
    classId:{type: String, required : true, unique:true},
    studentCount:{type:Number}
 })

const classModel = mongoose.model("Class",studentSchema);
module.exports = classModel;