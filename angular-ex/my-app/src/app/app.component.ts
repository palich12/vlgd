import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  time = '';

  ngOnInit(): void {
    setInterval(() => {
      this.time = Date.now().toString();
    }, 1000);
  }
}
