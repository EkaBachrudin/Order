import mongoose from 'mongoose'

const report = mongoose.Schema({
    customer_name:{
        type:String,
        required:true
    },
    no_order:{
        type:String,
        required:true
    },
    menus:{
        type:Array,
        required:true
    }
},{
    timestamps:true
}) 

export default mongoose.model('Report', report);