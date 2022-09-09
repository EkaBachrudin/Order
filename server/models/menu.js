import mongoose from 'mongoose'

const menu = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
}) 

export default mongoose.model('Menu', menu);