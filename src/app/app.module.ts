import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppIssDisplayComponent } from './iss-display/app.iss.display.component';
import { IssService } from './iss-display/service/app.iss.service';
import { HttpClientModule } from '@angular/common/http';
import { IssdModalComponent } from './iss-display/app.iss.dialog';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppIssDisplayComponent,
    IssdModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [IssService, NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents: [ IssdModalComponent ]
})
export class AppModule { }
