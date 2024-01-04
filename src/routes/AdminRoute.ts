import { createVendor, getVendorById, getVendors } from '../controllers/index';
import express, {Request, Response, NextFunction} from 'express';

const router = express.Router();

router.post('/vendor', createVendor )
router.get('/vendors', getVendors)
router.get('/vendor/:id', getVendorById)

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({"message":'Hello from Admin'})
});

export {router as AdminRoute}