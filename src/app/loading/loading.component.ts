import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <div class="spinner-wrapper">
      <mat-spinner [diameter]="150"></mat-spinner>
    </div>`,
  styles: [`.spinner-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }`]
})
export class LoadingComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
