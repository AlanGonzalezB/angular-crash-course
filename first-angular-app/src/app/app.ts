import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layouts/header/header";
import { User } from "./pages/user/user";
import { DUMMY_USERS } from '../../public/dummy-users'
import { Task } from "./pages/task/task";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User, Task],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!
  }

  onSelectUser(id: string) {
    this.selectedUserId = id
  }

  protected readonly title = signal('first-angular-app');
}
