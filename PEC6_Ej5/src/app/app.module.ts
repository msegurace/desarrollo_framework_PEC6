import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WineitemComponent } from './wineitem/wineitem.component';
import { WinelistComponent } from './winelist/winelist.component';
import { WineNewComponent } from './wine-new/wine-new.component';
import { WineServiceService } from './wine-service.service';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { ImageNotNullPipe } from './imageNotNullPipe';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    WineitemComponent,
    WinelistComponent,
    WineNewComponent,
    ImageNotNullPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    WineServiceService,
    {
      provide: LOCALE_ID,
        useValue: 'es' 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
