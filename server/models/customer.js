import mongoose from 'mongoose'

const customer = mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  table: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Table"
  }
}) 

export default mongoose.model('Customer', customer);