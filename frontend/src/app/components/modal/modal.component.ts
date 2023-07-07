import { Component } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AppState, CloseModal } from 'src/app/store/auth.actions';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  faMagnifyingGlass = faMagnifyingGlass;
  @Select(AppState.getModalState) isModalOpen$!: Observable<boolean>;

  constructor(private store: Store) {}
  handleCloseModal() {
    this.store.dispatch(new CloseModal());
  }
}
