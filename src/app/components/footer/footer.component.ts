import { Component, OnInit } from '@angular/core';
import {ActivitiesHelper} from '../utils/activitiesHelper';
import {Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }

  public go(destination: string) {
    this.router.navigate(['activities']);
  }

}
