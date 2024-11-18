import { Component } from '@angular/core';
import { HeadingComponent } from "./heading/heading.component";
import { BodingComponent } from "./boding/boding.component";
import { FootingComponent } from "./footing/footing.component";

@Component({
  selector: 'app-right',
  standalone: true,
  imports: [HeadingComponent, BodingComponent, FootingComponent],
  // templateUrl: './right.component.html',
  // styleUrl: './right.component.css'
  template: `
    <app-heading></app-heading>
    <app-boding></app-boding>
    <app-footing></app-footing>
  `
})
export class RightComponent {

}
