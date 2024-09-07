import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { User } from './user/user.interface';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'modern-angular-complete-guide';
  public users: User[] = DUMMY_USERS;
  public selectedUser!: User;
  public selectedUserId: string = '';

  private get findSelectedUser() {
    return this.users.find(user => user.id === this.selectedUser.id)!;
  }

  onSelectUser(user: User | any) {
    this.selectedUser = user;
    this.selectedUserId = user.id;
  }
}
