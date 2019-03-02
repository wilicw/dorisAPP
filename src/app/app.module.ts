import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MatCardModule, MatButtonModule, MatListModule, MatToolbarModule, MatTabsModule} from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoBusComponent } from './go-bus/go-bus.component';
import { BackBusComponent } from './back-bus/back-bus.component';

@NgModule({
  declarations: [
    AppComponent,
    GoBusComponent,
    BackBusComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
