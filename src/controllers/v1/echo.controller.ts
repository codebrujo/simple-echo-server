import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status'

const getResponse = (req: Request, res: Response, next: NextFunction) => {
    res.send('Simple echo server');
};

const postResponse = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    res.send(req.body);
};

const putResponse = (req: Request, res: Response, next: NextFunction) => {
    res.send(req.body);
};

const patchResponse = (req: Request, res: Response, next: NextFunction) => {
    res.send(req.body);
};

const deleteResponse = (req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.NO_CONTENT).end();
};

export { getResponse, postResponse, putResponse, patchResponse, deleteResponse };

