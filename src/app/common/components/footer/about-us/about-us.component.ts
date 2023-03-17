import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onNavigate(){
    window.open("https://en.wikipedia.org/wiki/Indian_Premier_League");
  }

  goToTwitter(){
    window.open("https://twitter.com/SportsGeekApp");
  }

  goToInstagram(){
    window.open("https://www.instagram.com/sportsgeekapp");
  }

  goToFacebook(){
    window.open("https://www.facebook.com/SportsGeekApp");
  }
}
