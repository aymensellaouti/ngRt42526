<<<<<<< HEAD
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInfoComponent } from '../user-info/user-info.component';
import { Router } from '@angular/router';
=======
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInfoComponent } from "../user-info/user-info.component";
import { HighlightDirective } from "../../directives/highlight.directive";
>>>>>>> 340c86d8606b2e7d67c5d401bbb410c4fe9329fe

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
<<<<<<< HEAD

  router = inject(Router);
=======
  color = 'yellow';
  isOn = signal(false);
>>>>>>> 340c86d8606b2e7d67c5d401bbb410c4fe9329fe
  constructor() {
    // setInterval(() => {
    // }, 1500)
  }
  showMessage(message: string) {
    alert(`message de mon fils: ${message}`);
  }
<<<<<<< HEAD
  checkUser() {
    this.router.navigate(['user']);
  }
=======
>>>>>>> 340c86d8606b2e7d67c5d401bbb410c4fe9329fe

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
