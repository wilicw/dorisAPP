import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MatGridListModule, MatInputModule, MatCardModule, MatButtonModule, MatListModule, MatToolbarModule, MatTabsModule, MatTableModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoBusComponent } from './go-bus/go-bus.component';
import { BackBusComponent } from './back-bus/back-bus.component';
import { environment } from '../environments/environment';
import { TimetableComponent } from './timetable/timetable.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    GoBusComponent,
    BackBusComponent,
    TimetableComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    MatGridListModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
