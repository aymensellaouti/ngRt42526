import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from "../../../../node_modules/@angular/common/common_module.d-NEF7UaHr";

@Component({
  selector: 'app-som',
  imports: [FormsModule],
  templateUrl: './som.component.html',
  styleUrl: './som.component.css',
})
export class SomComponent {
  x = signal(3);
  y = signal(5);
  z = computed(() => this.x() + this.y());
  doubleZ = computed(() => this.z() * 2);
  logMultipleDe10Effect = effect(() => {
    if (this.counter() % 10 == 0) {
      console.log(`J'ai atteint : ${this.counter()}`);
    }
  });
  counter = signal(1);
  show = computed(() => !!(this.counter() % 3 == 0));
  names = signal(['roua', 'douaa']);
  namesLength = computed(() => this.names().length);

  addName() {
    this.names.update((names) => [...names, 'Mouin']);
  }
  increment() {
    this.counter.update((oldValue) => oldValue + 1);
  }

  reset() {
    this.counter.set(0);
  }
}
