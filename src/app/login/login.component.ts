import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../interfaces';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitToggle: boolean = false;
  constructor(
    public auth: AuthService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null,[
        Validators.required,
        Validators.minLength(6)
      ])
    })

  }
  submit() {
    this.submitToggle = true;
    if(this.form.invalid) return
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    }
    this.auth.login(user).subscribe(()=>{
      this.form.reset()
      this.router.navigate(['/profile']);
      this.submitToggle = false
    }, ()=>{
      this.submitToggle = false
    })
  }
}
