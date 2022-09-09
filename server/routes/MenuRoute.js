import  express  from "express";
import {deleteMenu, getMenu, getMenuById, saveMenu, updateMenu} from "../controllers/MenuController.js";
const router = express.Router()

router.get('/menus', getMenu);
router.post('/menus', saveMenu);
router.delete('/menus/:id', deleteMenu);
router.get('/menus/:id', getMenuById);
router.patch('/menus/:id', updateMenu);

export default router;