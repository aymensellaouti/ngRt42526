import { Component, computed, signal, viewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorComponent } from 'src/app/components/color/color.component';

@Component({
  selector: 'app-som',
  imports: [FormsModule, ColorComponent],
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
