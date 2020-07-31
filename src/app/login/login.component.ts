import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import  { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private Auth: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }
  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector("#username").value;
    const password = target.querySelector("#password").value;

    this.Auth.getUserDetails(username, password).subscribe(data => {
      if(data.id_token) {
        localStorage.setItem('token',data.id_token);
        this.router.navigate(['admin']);
        this.Auth.setLoggedIn(true);
      }
    },(err: HttpErrorResponse) => {
        document.querySelector("small").style.display = "block";
    });
  }

}
