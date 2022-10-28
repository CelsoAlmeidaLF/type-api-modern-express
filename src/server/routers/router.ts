import express from 'express';
import ControllerHome from '../controllers/home';

let router = express.Router();
router.get('/', new ControllerHome().index);

export default router;