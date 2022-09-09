import mongoose from 'mongoose'

const order = mongoose.Schema({
    status:{
        type:String,
        required:true
    },
    no_order:{
        type:String,
        required:true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer"
    },
    menus: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Menu"
    }]
},{
    timestamps:true
}) 


export default mongoose.model('Order', order);