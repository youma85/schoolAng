import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'schoolAng';

  loadedPage = 'students';

  onNavigate(page: string) {
    this.loadedPage = page;
  }
}
