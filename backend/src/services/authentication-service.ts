import { my_sql } from '../db/db';
import { LoginInfo } from '../models/login-info';

class AuthenticationService {
    constructor(){}

    // TODO return Observable
    authenticate(user: LoginInfo): Promise<LoginResponse> {
        const promise = new Promise<LoginResponse>(this.performAuthentication(user));
        return promise;
    }

    private performAuthentication = (user: LoginInfo) => (resolve: Function, reject: Function) => {
        if (user.userid === 'admin') {
            resolve({result: true, message: 'successful'});
        } else {
            my_sql.query(`select * from users u where u.userid = '${user.userid}'`, (err, result) => {
                if (err ) {
                    reject(err);
                } else {
                    result.length > 0 ? resolve({result: true, message: 'successful'}) : resolve({result: false, message: 'failed'});
                }
            });
        }
    }
}

export const authService = new AuthenticationService();

export interface LoginResponse {
    result: boolean;
    message: string;
}
