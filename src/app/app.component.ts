import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from "./components/first/first.component";
import { TwoComponent } from "./components/two/two.component";
import { SomComponent } from './signals/som/som.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SomComponent, FirstComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ngRt42526';
}
