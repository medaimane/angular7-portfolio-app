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
      title: 'Software engineer &nbsp;&bull;&nbsp; JavaScript & Python dev &nbsp;&bull;&nbsp; Mobile Web enthusiast.',
      subtitle: '',
      description: '',
      personalInfos: {
        fullname: 'Mohamed Aimane Skhairi',
        email: 'skhairimedaimane@gmail.com',
        address: 'Tetouan Morocco',
        phone: '',
        avatar: '../../../assets/images/avatar.jpg'
      },
      links: [{
        name: 'github',
        url: 'https://github.com/medaimane',
        active: true
      }, {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/skhairimedaimane',
        active: true
      }, {
        name: 'twitter',
        url: 'https://twitter.com/med_aimane',
        active: true
      }]
    };
  }

  ngOnInit() {
  }

}
