import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { IssModel } from './app.iss.model';
import { IssService } from './service/app.iss.service';
import { timer } from 'rxjs';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { IssdModalComponent } from './app.iss.dialog';

@Component({
  selector: 'app-iss-display',
  templateUrl: './app.iss.display.component.html',
  styleUrls: ['./app.iss.display.component.scss']
})
export class AppIssDisplayComponent  implements OnInit {
    issModel: IssModel;
    issList: IssModel[] = [];
    showIssTable: boolean;
    constructor(private issService: IssService,
        private modalService: NgbModal){
       
    }
   
    ngOnInit(): void {
        let loadIssData = timer(0, 2000).subscribe(x => this.getIssData());
        this.getAllIssData();
    }

    getAllIssData()
    {
      this.issService.getAllIssData().subscribe(res=>{
        this.issList = res;
      });
    }

    getIssData()
    {
        this.issService.getIssData().subscribe(res=>{
            this.issModel = res;
            this.showIssTable = true;
        });
    }

    openModal() {
        const modalRef = this.modalService.open(IssdModalComponent);
        modalRef.componentInstance.issModel = this.issModel;
        modalRef.result.then((result) => {
            if (result) {
                this.issService.saveIssData(result) .subscribe(
                    result => {
                      this.issList = result;
                      this.showIssTable = true;
                      //console.log(result)
                    },
                    error => {
                        this.showIssTable = false;
                      alert(error.message);
                    },
                    () => {
                     
                    }
                  );
            }
            });
      }
}
