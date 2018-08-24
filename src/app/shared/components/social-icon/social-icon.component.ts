import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-icon',
  templateUrl: './social-icon.component.html',
  styleUrls: ['./social-icon.component.scss']
})
export class SocialIconComponent implements OnInit {
  @Input() icon: string;
  @Input() size: string;
  @Input() link: string;

  public get faIcon () {
    if (this.icon === 'email') {
      return `fas fa-envelope-square ${this.size}` ;
    } else if (this.icon === 'facebook') {
      return `fab fa-facebook-square ${this.size}` ;
    } else if (this.icon === 'twitter') {
      return `fab fa-twitter-square ${this.size}` ;
    } else if (this.icon === 'linkedin') {
      return `fab fa-linkedin ${this.size}` ;
    } else if (this.icon === 'github') {
      return `fab fa-github-square ${this.size}` ;

    }
  }

  constructor () { }

  ngOnInit () {
  }
}
