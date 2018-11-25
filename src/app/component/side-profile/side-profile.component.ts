import { Component, OnInit, Input } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile';

@Component({
  selector: 'app-side-profile',
  templateUrl: './side-profile.component.html',
  styleUrls: ['./side-profile.component.scss']
})
export class SideProfileComponent implements OnInit {

  @Input() profile: Profile;

  constructor() {
  }

  ngOnInit() {
  }

}
