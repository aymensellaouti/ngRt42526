import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInfoComponent } from "../user-info/user-info.component";
import { HighlightDirective } from "../../directives/highlight.directive";

@Component({
  selector: 'app-first',
  imports: [FormsModule, UserInfoComponent, HighlightDirective],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css',
})
export class FirstComponent {
  // State
  backgroundColor = 'yellow';
  openColor = 'yellow';
  color = 'yellow';
  isOn = signal(false);
  constructor() {
    // setInterval(() => {
    // }, 1500)
  }
  showMessage(message: string) {
    alert(`message de mon fils: ${message}`);
  }

  interrupteur() {
    this.isOn.update((value) => !value)
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
