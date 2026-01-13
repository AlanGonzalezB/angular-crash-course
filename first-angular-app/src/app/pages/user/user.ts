import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from "../../shared/card/card";

interface UserType {
    id: string;
    name: string;
    avatar: string;

}

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  @Input({required: true}) user!: UserType
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return '../../../assets/users/' + this.user.avatar
  }

  onSelectUser = () => {
    this.select.emit(this.user.id);
  }
}
