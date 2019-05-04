import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' ;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmrutiComponent } from './smruti/smruti.component';
import { AddressCarsComponent } from './address-cars/address-cars.component';
import { InvokerService } from './invoker.service';
import { ViewModule } from './view/view.module';
import { HttpClientModule } from '@angular/common/http';
import { JujuSmrutiComponent } from './juju-smruti/juju-smruti.component';
import { JujuMamaComponent } from './juju-mama/juju-mama.component';

@NgModule({
  declarations: [
    AppComponent,
    SmrutiComponent,
    AddressCarsComponent,
    JujuSmrutiComponent,
    JujuMamaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ViewModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [InvokerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
