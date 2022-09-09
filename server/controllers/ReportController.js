import Report from "../models/report.js";

export const getReport = async(req, res) => {
    try{
        const reports = await Report.find();
        res.json(reports);
    }catch (error){
        res.status(500).json({message: error.message});
    }
}

export const saveReport = async(req, res) => {
    const report = new Report(req.body);
    try{
        const insertReport = await report.save();
        res.status(201).json(insertReport);
    }catch (error){
        res.status(404).json({message: error.message});
    }
}

export const deleteReport = async(req, res) => {
    try{
        const report = await Report.deleteOne({_id:req.params.id}, {$set: req.body});
        res.status(201).json(report);
    }catch (error){
        res.status(404).json({message: error.message});
    }
}

export const getReportById = async(req, res) => {
    try{
        const report = await Report.findById(req.params.id);
        res.json(report);
    }catch (error){
        res.status(404).json({message: error.message});
    }
}

export const updateReport = async(req, res) => {
    try{
        const report = await Report.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(201).json(report);
    }catch (error){
        res.status(404).json({message: error.message});
    }
}