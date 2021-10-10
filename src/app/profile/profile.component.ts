import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileTitle: string = 'My profile';

  constructor(public authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  handleLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
