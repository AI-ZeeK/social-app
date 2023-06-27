import { Component } from '@angular/core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  isPasswordShow: boolean = false;
  faFacebookF = faFacebookF;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword() {
    this.isPasswordShow = !this.isPasswordShow;
  }
}
