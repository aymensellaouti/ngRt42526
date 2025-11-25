import { Component, Input, input, output, signal } from '@angular/core';

export class User {
  name = '';
  email = ''
}

@Component({
  selector: 'app-user-info',
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css',
})
export class UserInfoComponent {
  ccPapa = output<string>();
  user = input<User>({
    name: 'aymen',
    email: 'aymen@gmail.com',
  });
  section = input<string>('RT');

  sendMessageToDad() {
    this.ccPapa.emit('hello Papa');
  }
  @Input()
  name = '';
}
