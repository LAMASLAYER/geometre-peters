import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ActivitiesHelper} from '../../components/utils/activitiesHelper';

@Component({
  selector: 'app-materials-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
  }

  public goTo(destination: string) {
    ActivitiesHelper.ACTIVITY = destination;
    this.router.navigate(['activities']);
  }
}
