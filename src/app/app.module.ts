import { HttpModule } from '@angular/http';
import { CoursesService } from './courses/courses.service';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules from Angular Material used in the template
import { MatToolbarModule , MatSidenavModule , MatButtonModule, MatIconModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    // Every component under this module should be mentioned in the declarations array
    AppComponent
  ],
  imports: [
    // Every external or feature module should be mentioned in the imports array
    // We need to add the Angular Material Modules in this array
    // Don't forget the BrowserAnimationsModule
    // In addition we have the AppRoutingModule that adds the routing configurations to the app
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
