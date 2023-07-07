import { Component, ElementRef, HostListener } from '@angular/core';
import {
  faBars,
  faChevronDown,
  faChevronUp,
  faMagnifyingGlass,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { navData } from 'src/data/dummy.data';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import {
  AppState,
  CloseNav,
  OpenModal,
  SetLargeNavState,
  SetNavState,
  SetOptionNavState,
  SetSubNavState,
  ToggleNav,
} from 'src/app/store/auth.actions';
import { Router } from '@angular/router';
import { NavType, ProfOptionsNav } from 'src/data/Typesdata';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  faBars = faBars;
  faXmark = faXmark;
  faMagnifyingGlass = faMagnifyingGlass;
  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;
  previousScrollPosition = window.pageYOffset;
  scrollPos: boolean = true;
  profileDropDown: boolean = false;
  paid: string = 'Isaac Tubonibo Iyaye-Williams';
  scrollThreshold: number = 100; // Adjust the threshold value as needed

  openNav: boolean = false;
  //   navData = navData;
  constructor(
    private store: Store,
    private elementRef: ElementRef,
    private router: Router
  ) {}
  @Select(AppState.getProfOptionsNavState) profOptionsNav$!: Observable<
    ProfOptionsNav[]
  >;
  @Select(AppState.getNavData) navData$!: Observable<NavType[]>;
  @Select(AppState.getNavState) openNav$!: Observable<boolean>;

  handleToggleNav() {
    this.store.dispatch(new ToggleNav());
  }
  handleOpenProfileNav() {
    this.profileDropDown = !this.profileDropDown;
  }
  handleToEdit() {
    this.router.navigate(['profile/edit']);
  }
  handleSetOptionsNav(e: any) {
    this.router.navigate(['profile']);
    this.store.dispatch(new SetOptionNavState(e));
  }
  handleSetNavState(payload: any) {
    this.store.dispatch(new SetNavState(payload));
  }
  handleOpenModal() {
    this.store.dispatch(new OpenModal());
  }
  handleSetSubNavState(payload: any) {
    this.store.dispatch(new SetSubNavState(payload));
  }
  handleSetLargeNavState(payload: any) {
    this.store.dispatch(new SetLargeNavState(payload));
  }
  async toLogin() {
    this.store.dispatch(new CloseNav());
    await this.router.navigate(['/login']);
  }
  async toRegister() {
    this.store.dispatch(new CloseNav());
    await this.router.navigate(['/register']);
  }
  async toHome() {
    await this.router.navigate(['/']);
    this.store.dispatch(new CloseNav());
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const currentScrollPosition = window.pageYOffset;
    if (
      Math.abs(currentScrollPosition - this.previousScrollPosition) >=
      this.scrollThreshold
    ) {
      if (currentScrollPosition > this.previousScrollPosition) {
        // Scrolling down
        // console.log('Scrolling down', currentScrollPosition);
        this.scrollPos = false;
      } else {
        // Scrolling up
        // console.log('Scrolling up', currentScrollPosition);
        this.scrollPos = true;
      }
      this.previousScrollPosition = currentScrollPosition;
    }
  }
  ngOnInit() {
    this.openNav$.subscribe((e) => (this.openNav = e));
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.openNav) {
      const clickedInsideElement = this.elementRef.nativeElement.contains(
        event.target
      );
      if (!clickedInsideElement) {
        // Clicked outside the element
        console.log(12356);
        this.openNav = false;
        // Perform any additional actions here
      }
    }
  }

  handleChangeToHome() {
    this.router.navigate(['profile']);
  }
}
