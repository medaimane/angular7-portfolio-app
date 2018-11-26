import { Component, OnInit, Input } from '@angular/core';
import { ProfileDataService } from 'src/app/services/profile-data.service';
import { Profile } from 'src/app/interfaces/profile';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  profile: Profile;

  emailhref: string;
  description: string;

  constructor(private profileData: ProfileDataService) { }

  ngOnInit() {
    this.profile = this.profileData.data;
    this.emailhref = `mailto:${this.profile.personalInfos.email}`;
    this.description = 'Let’s build your future solution, tell us about your dream today and let’s do something amazing.';
  }

}
