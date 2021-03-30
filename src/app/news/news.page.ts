import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  newslist:  any;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log("Inside New Page")

    this.http.get('https://spaceflightnewsapi.net/api/v2/articles').subscribe((response) => {
      console.log(response);
      this.newslist = response
    });
    /*this.http.get('https://api.thesneakerdatabase.com/v1/sneakers').subscribe((response) => {
      console.log(response);
      this.newslist = response
    });*/
  
  }

}
