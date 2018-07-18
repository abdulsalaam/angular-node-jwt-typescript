import {NextFunction, RequestHandler, Request, Response} from 'express';

const allowedOrigin = process.env.ALLOWED_ORIGIN || "*";

const middleware: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    res.setHeader("Access-Control-Allow-Methods", "GET,POST");
    res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
    res.setHeader("Access-Control-Allow-Headers", "Authorization");
    next();
};


export const CorsMiddleware: RequestHandler = middleware;
