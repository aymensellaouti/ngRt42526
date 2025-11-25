import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { FirstComponent } from "./components/first/first.component";
import { TwoComponent } from "./components/two/two.component";
import { SomComponent } from './signals/som/som.component';
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SomComponent, FirstComponent, RouterLinkWithHref, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ngRt42526';
}
