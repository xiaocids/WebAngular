import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'kd-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    document.body.className = 'navbar-top';
  }

  ngOnDestroy() {
    document.body.className = '';
  }
}
