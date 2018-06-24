export class LoginInfo {
    userid: string;
    password: string;
    constructor(details?: any) {
        if (details && details.userid) {
            this.userid = details.userid;
        }
        details && details.password  && (() => {this.password = details.password; return true;})();
    }
}