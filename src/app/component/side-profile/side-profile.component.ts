import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile';

@Component({
  selector: 'app-side-profile',
  templateUrl: './side-profile.component.html',
  styleUrls: ['./side-profile.component.scss']
})
export class SideProfileComponent implements OnInit {

  profile: Profile;

  constructor() {
    this.profile = {
      title: 'Software engineer &nbsp;&bull;&nbsp; Mobile Web dev &nbsp;&bull;&nbsp; JavaScript & Python enthusiast.',
      subtitle: '',
      description: 'I have always been passionate about computer sciences and discovering new technologies to build innovative solutions.',
      personalInfos: {
        fullname: 'Mohamed Aimane Skhairi',
        email: 'skhairimedaimane@gmail.com',
        address: 'Tetouan Morocco',
        phone: '+212678240102',
        avatar: '../../../assets/images/avatar.jpg'
      },
      links: [{
        name: 'GitHub',
        icon: 'fa-github',
        url: 'https://github.com/medaimane',
        active: true
      }, {
        name: 'LinkedIn',
        icon: 'fa-linkedin',
        url: 'https://www.linkedin.com/in/skhairimedaimane',
        active: true
      }, {
        name: 'Twitter',
        icon: 'fa-twitter',
        url: 'https://twitter.com/med_aimane',
        active: true
      }, {
        name: 'Email',
        icon: 'fa-envelope-o',
        url: 'mailto:skhairimedaimane@gmail.com',
        active: true
      }]
    };
  }

  ngOnInit() {
  }

}
