import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from '../services/profile-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  apptitle = 'ng7medaimane';

  profile: any;

  constructor(private profileData: ProfileDataService) {
  }

  ngOnInit(): void {
    this.profile = this.profileData.data;
  }
}
