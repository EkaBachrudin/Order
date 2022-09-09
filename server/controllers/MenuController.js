import Menu from "../models/menu.js";

export const getMenu = async(req, res) => {
    try{
        const menus = await Menu.find();
        res.json(menus);
    }catch (error){
        res.status(500).json({message: error.message});
    }
}

export const saveMenu = async(req, res) => {
    const menu = new Menu(req.body);
    try{
        const insertMenu = await menu.save();
        res.status(201).json(insertMenu);
    }catch (error){
        res.status(404).json({message: error.message});
    }
}

export const deleteMenu = async(req, res) => {
    try{
        const menu = await Menu.deleteOne({_id:req.params.id}, {$set: req.body});
        res.status(201).json(menu);
    }catch (error){
        res.status(404).json({message: error.message});
    }
}

export const getMenuById = async(req, res) => {
    try{
        const menu = await Menu.findById(req.params.id);
        res.json(menu);
    }catch (error){
        res.status(404).json({message: error.message});
    }
}

export const updateMenu = async(req, res) => {
    try{
        const menu = await Menu.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(201).json(menu);
    }catch (error){
        res.status(404).json({message: error.message});
    }
}