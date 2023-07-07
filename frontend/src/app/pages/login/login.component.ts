import { Component } from '@angular/core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { GoogleAuthService } from 'src/app/services/google-auth.service';
import { SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';

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
  constructor(private googleAuthService: SocialAuthService) {}
  async signInWithGoogle(): Promise<void> {
    try {
      const user = await this.googleAuthService.signIn(
        GoogleLoginProvider.PROVIDER_ID
      );
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  }
  showPassword() {
    this.isPasswordShow = !this.isPasswordShow;
  }
}
