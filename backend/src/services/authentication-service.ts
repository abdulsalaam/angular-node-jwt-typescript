import { LoginInfo } from '../models/login-info';

class AuthenticationService {
    private users = ['admin', 'user'];
    constructor(){}

    // TODO return Observable
    authenticate(user: LoginInfo): boolean {
        return true;
    }
}

export const authService = new AuthenticationService();
