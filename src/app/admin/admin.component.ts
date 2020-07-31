import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import  { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private user: UserService, public Auth: AuthService, private router: Router) { }
  surname: string;
  name: string;
  productName = {};
  productImg = {};
  ngOnInit() {
    this.user.getUserData().subscribe(data => {
      this.name = data.name;
      this.surname = data.surname;
    })
  }
}
