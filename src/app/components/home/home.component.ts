import { Component, OnInit, Input } from '@angular/core';
import { ProfileDataService } from 'src/app/services/profile-data.service';
import { Profile } from 'src/app/interfaces/profile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  profile: Profile;

  constructor(private profileData: ProfileDataService) { }

  ngOnInit() {
    this.profile = this.profileData.data;
  }

}
