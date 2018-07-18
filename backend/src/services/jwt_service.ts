import jwt from 'jsonwebtoken';

// The token stuff below is added only to demo FE integration, when replaced with proper solution, FE needs to
// be updated accordingly but the general auth flow will still remain the same

const secret = 'secret';

export function createJWToken(details: UserDetail): string  {
    let token: string = jwt.sign(details, secret, {expiresIn: 10 * 60 * 1000, algorithm: 'HS256'});
    return token;
}

export function verifyToken(token: string): Promise<UserDetail> {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, decoded) => {
            !err && resolve(decoded as UserDetail);
            err && reject(err);
        });
    });
}

export interface UserDetail {
    userid: string;
    roles: string[];
}