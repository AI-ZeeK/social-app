import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  faChevronRight,
  faMagnifyingGlass,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AppState, CloseBanner, CloseNav } from 'src/app/store/auth.actions';

import { chefProfiles } from 'src/data/dummy.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  faHeart = faHeart;
  faXmark = faXmark;
  faMagnifyingGlass = faMagnifyingGlass;
  faChevronRight = faChevronRight;
  chefProfiles = chefProfiles;
  //   popupBanner: boolean = true;
  private isClickedInside = false;
  @Select(AppState.getNavState) openNav$!: Observable<boolean>;
  @Select(AppState.getPopupBanner) popupBanner$!: Observable<boolean>;
  openNav: boolean = false;
  constructor(
    private store: Store,
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private router: Router
  ) {}
  closeBanner() {
    this.store.dispatch(new CloseBanner());
  }

  handleToRecipePage() {
    this.router.navigate(['recipe/123']);
  }
}
