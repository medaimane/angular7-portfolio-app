import { Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {

  data: Profile;

  constructor() {
    this.data = {
      title: 'Software engineer &nbsp;&bull;&nbsp; JavaScript & Python dev <br>&nbsp;&bull;&nbsp; Mobile Web enthusiast.',
      subtitle: '',
      description: 'I have always been passionate about computer sciences and discovering new technologies to build innovative solutions.',
      personalInfos: {
        fullname: 'Mohamed Aimane Skhairi',
        email: 'skhairimedaimane@gmail.com',
        address: 'Tetouan Morocco',
        phone: '+212678240102',
        avatar: '../../../assets/images/me.jpeg'
      },
      links: [{
        name: 'Twitter',
        icon: 'icon fa-twitter',
        url: 'https://twitter.com/med_aimane',
        active: true
      }, {
        name: 'GitHub',
        icon: 'icon fa-github',
        url: 'https://github.com/medaimane',
        active: true
      }, {
        name: 'LinkedIn',
        icon: 'icon fa-linkedin',
        url: 'https://www.linkedin.com/in/skhairimedaimane',
        active: true
      }, {
        name: 'Email',
        icon: 'icon fa-envelope-o',
        url: 'mailto:skhairimedaimane@gmail.com',
        active: false
      }]
    };
  }
}
