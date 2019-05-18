import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  get services(): boolean {
    return this._services;
  }

  set services(value: boolean) {
    this._services = value;
  }
  get about(): boolean {
    return this._about;
  }

  set about(value: boolean) {
    this._about = value;
  }
  get main(): boolean {
    return this._main;
  }

  set main(value: boolean) {
    this._main = value;
  }
  get dropdown(): boolean {
    return this._dropdown;
  }

  set dropdown(value: boolean) {
    this._dropdown = value;
  }
  get openMenu(): boolean {
    return this._openMenu;
  }

  set openMenu(value: boolean) {
    this._openMenu = value;
  }
  get mobile(): boolean {
    return this._mobile;
  }

  set mobile(value: boolean) {
    this._mobile = value;
  }

  private _mobile: boolean;
  private _openMenu: boolean;
  private _dropdown: boolean;
  private _main: boolean;
  private _about: boolean;
  private _services: boolean;

  constructor() {}

  ngOnInit(): void {
    this._main = true;
    const w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight || e.clientHeight || g.clientHeight;
    if (x > 720) {
      this._mobile = true;
    } else {
      this._mobile = false;
    }
  }
}
