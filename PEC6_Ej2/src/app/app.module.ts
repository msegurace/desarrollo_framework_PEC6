import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';  

import { AppComponent } from './app.component';
import { WineitemComponent } from './wineitem/wineitem.component';
import { WinelistComponent } from './winelist/winelist.component';
import { WineNewComponent } from './wine-new/wine-new.component';
import { WineServiceService } from './wine-service.service';

@NgModule({
  declarations: [
    AppComponent,
    WineitemComponent,
    WinelistComponent,
    WineNewComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    WineServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
