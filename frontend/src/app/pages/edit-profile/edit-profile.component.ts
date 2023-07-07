import { Component } from '@angular/core';
import {
  faEye,
  faEyeSlash,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent {
  paid: string = 'Isaac Tubonibo Iyaye-Williams';
  isPasswordShow: boolean = false;

  faHeart = faHeart;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  showPassword() {
    this.isPasswordShow = !this.isPasswordShow;
  }
}
