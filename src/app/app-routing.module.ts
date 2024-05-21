import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import {ViewComponent} from './view/view.component';
import {AdminComponent} from './admin/admin.component';
import { Home0Component } from './home0/home0.component';
import { AnnuaireComponent } from './annuaire/annuaire.component';
import { OffreComponent } from './offre/offre.component';
import{SupportComponent} from './support/support.component';
import{CvComponent}from'./cv/cv.component';
import{FactureComponent} from './facture/facture.component';
import{MoffreComponent}from'./moffre/moffre.component';
import { AddoffComponent } from './addoff/addoff.component';
import { AddcoachComponent } from './addcoach/addcoach.component';
import {  DemandesComponent } from './demandes/demandes.component';
import { ViewcoachComponent } from './viewcoach/viewcoach.component';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    component:Home0Component,
  },
  {
    path:'cv',
    component:CvComponent,
  },
  {
    path:'offre/:id',
    component:OffreComponent,
  },
  {
    path:'ann',
    component:AnnuaireComponent,
  },
  {
    path:"req",
    component:SupportComponent 
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'view/:id',
    component: ViewComponent 
  },
  {
    path:'viewcoach/:id',
    component: ViewcoachComponent 
  },
  {
    path:'add',
    component: AddComponent 
  },
  {
    path:'off',
    component: MoffreComponent 
  },
  {
    path:'astuces',
    component: PlayerComponent
  },
  {
    path:'addoff',
    component: AddoffComponent 
  },
  {
    path:'fact/:ida/:id',
    component: FactureComponent 
  },
  {
    path:'admin/:id',
    component: AdminComponent
  },
  {
    path:'addcoach',
    component: AddcoachComponent
  },
  {
    path:'demandes',
    component: DemandesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
