import  express  from "express";
import {deleteReport, getReport, getReportById, saveReport, updateReport} from "../controllers/ReportController.js";
const router = express.Router()

router.get('/reports', getReport);
router.post('/reports', saveReport);
router.delete('/reports/:id', deleteReport);
router.get('/reports/:id', getReportById);
router.patch('/reports/:id', updateReport);

export default router;