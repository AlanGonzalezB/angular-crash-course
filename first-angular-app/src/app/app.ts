import { Component, signal } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layouts/header/header";
import { User } from "./pages/user/user";
import { DUMMY_USERS } from '../../public/dummy-users'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User, KeyValuePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;

  onSelectUser(id: string) {
    console.log('selected user with id: ' + id)

  }




  protected readonly title = signal('first-angular-app');
}
