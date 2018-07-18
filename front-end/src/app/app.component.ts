import { Component } from '@angular/core';
import { AuthenticationService } from './core/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
    constructor(private authenticationService: AuthenticationService) {}

    get loggedIn(): boolean {
        return this.authenticationService.authenticated;
    }
}
