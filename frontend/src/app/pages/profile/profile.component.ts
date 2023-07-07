import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faBookmark, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBook, faGear, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AppState, SetOptionNavState } from 'src/app/store/auth.actions';
import { ProfOptionsNav } from 'src/data/Typesdata';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  faGear = faGear;
  faBookmark = faBookmark;
  faBook = faBook;
  faHeart = faHeart;
  faPlus = faPlus;
  paid: string = 'Isaac Tubonibo Iyaye-Williams';
  @Select(AppState.getProfOptionsNavState) profOptionsNav$!: Observable<
    ProfOptionsNav[]
  >;
  constructor(private store: Store, private router: Router) {}

  handleSetOptionsNav(e: any) {
    this.store.dispatch(new SetOptionNavState(e));
  }
  handleToEdit() {
    this.router.navigate(['profile/edit']);
  }
}
