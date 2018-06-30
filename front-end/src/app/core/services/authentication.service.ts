import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs/index';
import { config } from '../../constants';
import { LoginResponse } from '../models/login-response';
import { ROLE_TYPES } from '../models/role-types';
import { UserInfo } from '../models/user-info';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    constructor(private http: HttpClient) {
    }

    login(userInfo: UserInfo): Observable<HttpResponse<LoginResponse>> {
        console.log(`Logging in the user: `, userInfo.userid);
        return this.http.post<LoginResponse>(config.loginEndpoint, userInfo, { observe: 'response' });
    }

    logout() {
        return this.http.get(config.logoutEndpoint);
    }

    get authenticated(): boolean {
        let jwtCookie = this.extractCookieValueForName('jwt');
        return !!jwtCookie;
    }

    get roles(): ROLE_TYPES[] {
        const jwtToken = this.extractCookieValueForName('jwt');
        const decoded: {roles: ROLE_TYPES[]} = jwtDecode(jwtToken);
        return decoded.roles;
    }

    // TODO use a proper cookie parser library here ..
    private extractCookies() : string[] | undefined {
        const cookies: string[] = document.cookie.split(';').map(v => v.replace(/\s/, ''));
        return cookies;
    }

    private extractCookieValueForName(name: string): string | undefined {
        const cookies: string[] = this.extractCookies();
        if (cookies.length === 0) {
            return undefined;
        }

        const cookieForName: string[] = cookies.filter(value => value.startsWith(`${name}=`));
        if(cookieForName.length === 0) return undefined;
        const cookieValue = cookieForName[0].split('=').filter(v => v != name)[0];
        return cookieValue;
    }
}
