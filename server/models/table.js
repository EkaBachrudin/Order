import mongoose from 'mongoose'

const table = mongoose.Schema({
  name:{
    type:String,
    required:true
  }
}) 

export default mongoose.model('Table', table);