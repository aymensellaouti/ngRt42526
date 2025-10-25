import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  imports: [FormsModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css',
})
export class FirstComponent {
  // State

  backgroundColor = 'yellow';
  openColor = 'yellow';
  constructor() {
    // setInterval(() => {
    // }, 1500)
  }

  // Behaviour
  changeColor() {
    this.backgroundColor === this.openColor
      ? (this.backgroundColor = 'black')
      : (this.backgroundColor = this.openColor);
  }
  changeOpenColor(newColor: HTMLInputElement) {
    this.openColor = newColor.value;
    newColor.value = '';
  }
}
