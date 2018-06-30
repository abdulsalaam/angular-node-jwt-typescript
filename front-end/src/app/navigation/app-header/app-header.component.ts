import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/internal/operators';
import { AuthenticationService } from '../../core/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    //TODO implement takeUntil on a cancel observable than do take(1) below
    this.authenticationService.logout().pipe(take(1)).subscribe(s => {
        this.router.navigate(['login']);
    });
  }
}
