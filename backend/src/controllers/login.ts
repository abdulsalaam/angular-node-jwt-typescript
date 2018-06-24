import { Request, Response } from 'express';
import { LoginInfo } from '../models/login-info';
import { authService } from '../services/authentication-service';

const postLogin = (req: Request, res: Response) => {
    const userDetails: LoginInfo = req.body as LoginInfo;
    console.log(`The user details`, userDetails);
    res.status(200).json({status: 'success'});
};

export default postLogin;