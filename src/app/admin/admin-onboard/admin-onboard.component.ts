import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IAdmin } from '../model/admin';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-onboard',
  templateUrl: './admin-onboard.component.html',
  styleUrls: ['./admin-onboard.component.scss']
})
export class AdminOnboardComponent implements OnInit {

  adminList: Array<IAdmin> = [];
  closeResult = '';

  constructor(private adminSvc: AdminService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.adminList = this.adminSvc.adminList;
  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', backdrop: 'static',
    keyboard: false }).result.then((result) => {
      debugger
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
