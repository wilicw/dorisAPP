import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Doris App 2.0';
  selected = 1;
  ngOnInit() {
    let d = new Date();
    let n = d.getHours();
    if (n > 12) {
      this.selected = 1;
    } else {
      this.selected = 0;
    }
  }
}
