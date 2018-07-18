import { CookieOptions, Request, Response } from 'express';
import { LoginInfo } from '../models/login-info';
import { authService } from '../services/authentication-service';
import { createJWToken } from '../services/jwt_service';

const postLogin = (req: Request, res: Response) => {
    const userDetails: LoginInfo = req.body as LoginInfo;
    console.log(`The user details`, userDetails);
    authService.authenticate(userDetails).then(result => {
        res.status(200);
        if (result.result) {
            res.cookie('jwt', createJWToken({
                    userid: userDetails.userid,
                    roles: [ userDetails.userid === 'admin' ? 'admin' : 'user' ]
                }),
                {
                    httpOnly: false, maxAge: 10 * 60 * 1000
                } as CookieOptions)
        } else {
            res.clearCookie('jwt');
        }

        res.json(result);
    }).catch(err => {
        res.status(500).clearCookie('jwt').json({ error: err });
    });

};

export const logout = (req: Request, res: Response) => {
    return res.clearCookie('jwt').json({ status: 'logged_out' });
};

export default postLogin;
