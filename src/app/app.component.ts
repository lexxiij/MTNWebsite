// app.component.ts — The ROOT component. It wraps the whole app.
// It holds the navbar + the <router-outlet> where pages swap in/out.

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',       // This matches <app-root> in index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MTN, Inc.';
  currentYear = new Date().getFullYear(); // Used in the footer copyright
}
