import { Injectable } from '@angular/core';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from 'angularx-social-login';

@Injectable({
  providedIn: 'root',
})
export class GoogleAuthService {
  private user!: SocialUser;

  constructor(private authService: SocialAuthService) {}

  init(): void {
    this.authService.initState.subscribe(() => {
      this.authService.authState.subscribe((user) => {
        this.user = user;
      });
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  getUser(): SocialUser {
    return this.user;
  }
}
