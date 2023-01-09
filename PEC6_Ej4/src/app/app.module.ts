import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';

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
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    WineServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
