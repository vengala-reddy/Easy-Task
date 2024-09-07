import { Component, computed, EventEmitter, Input, input, Output, output, signal, WritableSignal } from '@angular/core';
import { User } from './user.interface';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  public receivedUser = input.required<User>();
  public imagePath = computed(() => `assets/users/${this.receivedUser().avatar}`);
  public sendingUser = output<User>();
  public isUserSelected = input.required<boolean>();
  public onSelectUser() {
    this.sendingUser.emit(this.receivedUser());
  }
}
