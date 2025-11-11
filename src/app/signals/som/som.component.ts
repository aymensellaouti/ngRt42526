import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-som',
  imports: [FormsModule],
  templateUrl: './som.component.html',
  styleUrl: './som.component.css',
})
export class SomComponent {
  update() {
    throw new Error('Method not implemented.');
  }
  x = 3;
  y = 5;
  z = this.x + this.y;
}
