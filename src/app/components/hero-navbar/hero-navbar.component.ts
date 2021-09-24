import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-navbar',
  templateUrl: './hero-navbar.component.html',
  styleUrls: ['./hero-navbar.component.scss']
})
export class HeroNavbarComponent implements OnInit {

  public isOpen: boolean = false;
  public menuMobileCssClass: string = "fas fa-bars social-media-logo";
  
  ngOnInit(): void {
  }

  public openClose():void{
    this.isOpen = !this.isOpen;
    this.menuMobileCssClass = this.isOpen ? "fas fa-times social-media-logo" : "fas fa-bars social-media-logo"
  }
}
