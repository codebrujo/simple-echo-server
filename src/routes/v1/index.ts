import express, { Request, Response } from 'express';
import echoRoutes from './echo.router';

const router = express.Router();

/**
 * GET api/status
 */
router.get('/status', (req: Request, res: Response) => res.send('OK'));

/**
 * GET v1/users
 */
router.use('/echo', echoRoutes);


export default router;
