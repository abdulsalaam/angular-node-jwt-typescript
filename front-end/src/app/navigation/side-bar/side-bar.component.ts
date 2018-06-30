import { Component, OnInit } from '@angular/core';
import { ROLE_TYPES } from '../../core/models/role-types';
import { AuthenticationService } from '../../core/services/authentication.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    console.log(`Initialised the sidebar comp`);
  }

  get isAdmin(): boolean {
    return this.authenticationService.roles.some(role => role === ROLE_TYPES.ADMIN);
  }

}
