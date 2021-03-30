import { Component, OnInit } from '@angular/core';

// Remember the Imports
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {
  user = {}

  constructor(private storage: Storage, private router: Router){

  }

  ngOnInit() {
  }

  register(){
    console.log(this.user);
    this.storage.set('user', this.user).then((obj) => {
      this.router.navigate(['/dashboard'])
    });



  }

}
