import {Component} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-materials-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { cols: 1, rows: 1, url: '../../../assets/banner.jpg' },
          { cols: 1, rows: 1 , url: '../../../assets/buildings.jpeg',
            list1: 'Relevé topographique',
            list2: 'Bornage',
            list3: 'Division',
            list4: 'Etude de voirie',
            list5: 'Etat des lieux',
            list6: 'Expertise immobilière',
            list7: 'Implantation de batiment'
            },
          { cols: 1, rows: 1 , url: '../../../assets/call.jpg',
            list1: 'Tel: +32 495 56 02 85',
            list2: 'Mail: pters.kevin@gmail.com',
            list3: 'Adresse: Voie de l\'Air Pur 222, 4052 Beaufays'
          }        ];
      }

      return [
        { cols: 2, rows: 1, url: '../../../assets/banner.jpg'},
        { cols: 1, rows: 1, url: '../../../assets/buildings.jpeg' ,
          list1: 'Relevé topographique',
          list2: 'Bornage',
          list3: 'Division',
          list4: 'Etude de voirie',
          list5: 'Etat des lieux',
          list6: 'Expertise immobilière',
          list7: 'Implantation de batiment'
        },
        { cols: 1, rows: 1 , url: '../../../assets/call.jpg',
          list1: 'Tel: +32 495 56 02 85',
          list2: 'Mail: pters.kevin@gmail.com',
          list3: 'Adresse: Voie de l\'Air Pur 222, 4052 Beaufays'
        }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
