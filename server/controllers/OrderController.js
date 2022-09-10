import Order from "../models/order.js";
import {io} from '../index.js' 

export const getOrder = async(req, res) => {
    try{
        const orders = await Order.find();
        res.json(orders);
    }catch (error){
        res.status(500).json({message: error.message});
    }
}

export const saveOrder = async(req, res) => {
    const order = new Order(req.body);
    try{
        const insertOrder = await order.save();
        const orders = await Order.find()
        io.emit('order-added', orders)
        res.status(201).json(insertOrder);
    }catch (error){
        res.status(404).json({message: error.message});
    }
}

export const deleteOrder = async(req, res) => {
    try{
        const order = await Order.deleteOne({_id:req.params.id}, {$set: req.body});
        res.status(201).json(order);
    }catch (error){
        res.status(404).json({message: error.message});
    }
}

export const getOrderById = async(req, res) => {
    try{
        const order = await Order.findById(req.params.id);
        res.json(order);
    }catch (error){
        res.status(404).json({message: error.message});
    }
}

export const updateOrder = async(req, res) => {
    try{
        const order = await Order.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(201).json(order);
    }catch (error){
        res.status(404).json({message: error.message});
    }
}