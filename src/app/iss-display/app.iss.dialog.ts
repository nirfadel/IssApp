import {Component, EventEmitter, Input, Output} from '@angular/core';

import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'iss-dialog',
  templateUrl: './app.iss.dialog.html'
})
export class IssdModalComponent {
  closeResult = '';

  @Input() public issModel;

  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) {}

passBack() {
    this.activeModal.close(this.issModel);
}

}