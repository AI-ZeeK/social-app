import { Component } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AppState, CloseBanner } from 'src/app/store/auth.actions';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  faXmark = faXmark;

  @Select(AppState.getPopupBanner) popupBanner$!: Observable<boolean>;
  openNav: boolean = false;
  constructor(private store: Store) {}
  closeBanner() {
    this.store.dispatch(new CloseBanner());
  }
}
