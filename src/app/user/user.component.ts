import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input({ required: true }) avatar!: String;
  @Input({ required: true }) name!: String;

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {}
}
