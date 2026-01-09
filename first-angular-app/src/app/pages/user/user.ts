import { Component, Input, Output, EventEmitter } from '@angular/core';

interface UserType {
    id: string;
    name: string;
    avatar: string;

}

@Component({
  selector: 'app-user',
  imports: [],
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
