import { Component, OnInit } from '@angular/core';

// Remeber the Imports
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {

  user = {}
  constructor(private storage: Storage, private router: Router) { }

  ngOnInit() {
    // Get the user object
    this.storage.get('user').then((obj) => {
      console.log(obj);
      this.user = obj
    });
  }

  delete(){
    this.storage.set('user', null).then((obj) => {
      this.router.navigate(['/'])
    });
  }

  logout(){
    this.router.navigate(['/'])
  }

}
