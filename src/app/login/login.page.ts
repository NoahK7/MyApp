import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  email = "";
  password = "";
  error = false;
  errorMsg = "";

  constructor(private storage: Storage, private router: Router) {}

  login(){

    this.storage.get('user').then((user) => {
      console.log(user);
      if (user) {
        if (user.email == this.email && user.password == this.password){

          this.email = ""
          this.password = ""

          this.error = false;

          this.router.navigate(['dashboard'])

        }
        else {
          
          this.email = ""
          this.password =""

          this.error = true;
          this.errorMsg = "Invalid email or password"

        }
      } else {

        this.error = true;
        this.errorMsg = "No account found. Please register first!"

      }
    });
  }

  
  ngOnInit() {
  }

}