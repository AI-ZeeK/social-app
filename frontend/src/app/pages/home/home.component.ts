import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  faChevronRight,
  faMagnifyingGlass,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AppState, CloseNav } from 'src/app/store/auth.actions';

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
  private isClickedInside = false;
  @Select(AppState.getNavState) openNav$!: Observable<boolean>;
  openNav: boolean = false;
  constructor(
    private store: Store,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    const elementsWithAttribute =
      this.elementRef.nativeElement.querySelectorAll('#body');

    elementsWithAttribute.forEach((element: HTMLElement) => {
      this.openNav$.subscribe((e) => (this.openNav = e));
      console.log(123);
      if (this.openNav) {
        console.log(456);
        this.renderer.listen(element, 'click', (event: Event) => {
          this.store.dispatch(new CloseNav());
        });
      }
    });
  }
}
