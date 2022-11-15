import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-new';
  text = "to be or not to be...";
  name: string = 'nick';
  getTitle(): string {
    return this.title;
  }
}
