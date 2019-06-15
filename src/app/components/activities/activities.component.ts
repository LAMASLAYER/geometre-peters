import { Component, OnInit } from '@angular/core';
import {ActivitiesHelper} from '../utils/activitiesHelper';
import {Router} from '@angular/router';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  public activity: string;
  public router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit() {
    // if (ActivitiesHelper.ACTIVITY === ('' || null || undefined)) {
    //   this.router.navigate(['home']);
    // }
    this.activity = ActivitiesHelper.ACTIVITY;
  }

}
