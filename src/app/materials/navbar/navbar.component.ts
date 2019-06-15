import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';
import {ActivitiesHelper} from '../../components/utils/activitiesHelper';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

  private router: Router;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, router: Router) {
    this.router = router;
  }

  public goHome(destination: string) {
    this.router.navigate([destination]);
  }

  public goTo(destination: string) {
    ActivitiesHelper.ACTIVITY = destination;
    this.router.navigate(['activities']);
  }
}
