import  express  from "express";
import {deleteOrder, getOrder, getOrderById, saveOrder, updateOrder} from "../controllers/OrderController.js";
const router = express.Router()

router.get('/orders', getOrder);
router.post('/orders', saveOrder);
router.delete('/orders/:id', deleteOrder);
router.get('/orders/:id', getOrderById);
router.patch('/orders/:id', updateOrder);

export default router;