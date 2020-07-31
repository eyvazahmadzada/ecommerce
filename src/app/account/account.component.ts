import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private user: UserService, public Auth: AuthService) { }
  name: string;
  surname: string;
  email: string;
  gender: string;
  birthdate: string;

  ngOnInit() {
    this.user.getUserData().subscribe(data => {
      this.name = data.name;
      this.surname = data.surname;
      this.email = data.email;
      this.gender = data.gender;
      this.birthdate = data.birthdate;
      console.log(data);
    })
  }

}
