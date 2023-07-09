import { Component, ElementRef, HostListener } from '@angular/core';
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
  clickedOutsideModal = false;
  isModalOpen!: boolean;
  @Select(AppState.getModalState) isModalOpen$!: Observable<boolean>;
  constructor(private store: Store, private elementRef: ElementRef) {}
  ngOnInit() {
    this.isModalOpen$.subscribe((e) => (this.isModalOpen = e));
  }
  @HostListener('document:click', ['$event'])
  clickOutsideComponent(event: MouseEvent) {
    if (this.isModalOpen) {
      const modalElement =
        this.elementRef.nativeElement.querySelector('.modal');
      const modalOverlay =
        this.elementRef.nativeElement.querySelector('.modal-overlay');
      if (
        modalElement &&
        !modalElement.contains(event.target) &&
        modalOverlay.contains(event.target)
      ) {
        this.clickedOutsideModal = true;
        this.store.dispatch(new CloseModal());
      } else {
        this.clickedOutsideModal = false;
      }
    }
  }
  handleCloseModal() {
    this.store.dispatch(new CloseModal());
  }
}
