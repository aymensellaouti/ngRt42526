import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {

  name = 'rt4';
  activatedRoute = inject(ActivatedRoute);
  constructor() {
    console.log(this.activatedRoute.snapshot);
    this.name = this.activatedRoute.snapshot.params['test']
  }
}
