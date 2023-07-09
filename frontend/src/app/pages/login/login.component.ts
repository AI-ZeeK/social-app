import { Component } from '@angular/core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { GoogleAuthService } from 'src/app/services/google-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isPasswordShow: boolean = false;
  faFacebookF = faFacebookF;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  constructor() {}

  showPassword() {
    this.isPasswordShow = !this.isPasswordShow;
  }
}
