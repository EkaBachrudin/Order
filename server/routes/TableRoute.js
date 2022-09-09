import  express  from "express";
import {deleteTable, getTable, getTableById, saveTable, updateTable} from "../controllers/TableController.js";
const router = express.Router()

router.get('/tables', getTable);
router.post('/tables', saveTable);
router.delete('/tables/:id', deleteTable);
router.get('/tables/:id', getTableById);
router.patch('/tables/:id', updateTable);

export default router;