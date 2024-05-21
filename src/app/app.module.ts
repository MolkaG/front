import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from'@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { FilterPipeModule } from 'ngx-filter-pipe';
import {CookieService} from 'ngx-cookie-service';
import {CoreModule} from './core/core.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { Home0Component } from './home0/home0.component';
import { AnnuaireComponent } from './annuaire/annuaire.component';
import { SupportComponent } from './support/support.component';
import { CvComponent } from './cv/cv.component';
import { OffreComponent } from './offre/offre.component';
import { FactureComponent } from './facture/facture.component';
import { MoffreComponent } from './moffre/moffre.component';
import { AddoffComponent } from './addoff/addoff.component';
import { from } from 'rxjs';
import { AddcoachComponent } from './addcoach/addcoach.component';
import { DemandesComponent } from './demandes/demandes.component';
import { MessagesComponent } from './messages/messages.component';
import { ViewcoachComponent } from './viewcoach/viewcoach.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { PlayerComponent } from './player/player.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ViewComponent,
    HomeComponent,
    AdminComponent,
    Home0Component,
    AnnuaireComponent,
    SupportComponent,
    CvComponent,
    OffreComponent,
    FactureComponent,
    MoffreComponent,
    AddoffComponent,
    AddcoachComponent,
    DemandesComponent,
    MessagesComponent,
    ViewcoachComponent,
    PlayerComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CoreModule,
    FilterPipeModule, 
    YouTubePlayerModule,
    BrowserModule,
    BrowserAnimationsModule, 
    MatTabsModule 
  ],
  providers: [
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
