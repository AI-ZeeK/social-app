import { Component } from '@angular/core';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';
import {
  faYoutube,
  faPinterestP,
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faFacebookF = faFacebookF;
  faYoutube = faYoutube;
  faPinterestP = faPinterestP;
  faLinkedin = faLinkedin;
}
