import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInfoComponent } from '../user-info/user-info.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  imports: [FormsModule, UserInfoComponent],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css',
})
export class FirstComponent {
  // State
  backgroundColor = 'yellow';
  openColor = 'yellow';

  router = inject(Router);
  constructor() {
    // setInterval(() => {
    // }, 1500)
  }
  showMessage(message: string) {
    alert(`message de mon fils: ${message}`);
  }
  checkUser() {
    this.router.navigate(['user']);
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
