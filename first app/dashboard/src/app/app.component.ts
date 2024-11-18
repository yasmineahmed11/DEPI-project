import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftComponent } from "./left/left.component";
import { RightComponent } from "./right/right.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LeftComponent, RightComponent],
  // templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
  template: `
  <div class="container">
    <app-left></app-left>
    <app-right></app-right>
  </div>
  `
})
export class AppComponent {
  title = 'dashboard';
}
