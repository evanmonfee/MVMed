import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DrugsService } from './service/drugs.service';
import { CoreRestService } from './service/core-rest.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DrugsService, CoreRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
