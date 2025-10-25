import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from "./components/first/first.component";
import { TwoComponent } from "./components/two/two.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstComponent, TwoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngRt42526';
}
