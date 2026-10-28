import { Routes } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { AppareilDashboard } from './appareil-dashboard/appareil-dashboard';
import { AppareilDetail } from './appareil-detail/appareil-detail';
import { Contact } from './contact/contact';
import { Authentif } from './authentif/authentif';

export const routes: Routes = [
  { path: 'home', component: Welcome },
  
  // L'ordre est important ici ! 
  // 1. On met d'abord la route pour les détails (qui a un /:id)
  { path: 'appareils/:id', component: AppareilDetail },
  
  // 2. Ensuite la route pour la liste globale
  { path: 'appareils', component: AppareilDashboard },
  
  { path: 'contact', component: Contact },
  { path: 'login', component: Authentif },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];