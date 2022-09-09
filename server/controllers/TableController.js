import Table from "../models/table.js";

export const getTable = async(req, res) => {
    try{
        const tables = await Table.find();
        res.json(tables);
    }catch (error){
        res.status(500).json({message: error.message});
    }
}

export const saveTable = async(req, res) => {
    const table = new Table(req.body);
    try{
        const insertTable = await table.save();
        res.status(201).json(insertTable);
    }catch (error){
        res.status(404).json({message: error.message});
    }
}

export const deleteTable = async(req, res) => {
    try{
        const table = await Table.deleteOne({_id:req.params.id}, {$set: req.body});
        res.status(201).json(table);
    }catch (error){
        res.status(404).json({message: error.message});
    }
}

export const getTableById = async(req, res) => {
    try{
        const table = await Table.findById(req.params.id);
        res.json(table);
    }catch (error){
        res.status(404).json({message: error.message});
    }
}

export const updateTable = async(req, res) => {
    try{
        const table = await Table.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(201).json(table);
    }catch (error){
        res.status(404).json({message: error.message});
    }
}