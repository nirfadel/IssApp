import { Component, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'iss-dialog',
  templateUrl: './app.iss.dialog.html'
})
export class IssdModalComponent {
  @Input() public issModel;

  constructor(public activeModal: NgbActiveModal) {}

passBack() {
    this.activeModal.close(this.issModel);
}

}
