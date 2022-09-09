import  express  from "express";
import {deleteCustomer, getCustomer, getCustomerById, saveCustomer, updateCustomer} from "../controllers/CustomerController.js";
const router = express.Router()

router.get('/customers', getCustomer);
router.post('/customers', saveCustomer);
router.delete('/customers/:id', deleteCustomer);
router.get('/customers/:id', getCustomerById);
router.patch('/customers/:id', updateCustomer);

export default router;