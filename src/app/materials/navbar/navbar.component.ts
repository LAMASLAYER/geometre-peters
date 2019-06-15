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
  get displayed(): boolean {
    console.log(this._displayed)
    return this._displayed;
  }

  set displayed(value: boolean) {
    console.log(this._displayed)
    this._displayed = value;
  }

  private router: Router;
  private _displayed: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, router: Router) {
    this.router = router;
  }

  public go(destination: string) {
    this.router.navigate([destination]);
  }

  public goTo(destination: string) {
    ActivitiesHelper.ACTIVITY = destination;
    this.router.navigateByUrl('/home', {skipLocationChange: true})
      .then(() => this.router.navigate(['activities']));
  }

}
