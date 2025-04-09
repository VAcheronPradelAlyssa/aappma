import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ActualitesComponent } from './pages/actualites/actualites.component';
import { ArticleComponent } from './pages/article/article.component';
import { EvenementsComponent } from './pages/evenements/evenements.component';
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';
import { MembresConseilComponent } from './pages/membres-conseil/membres-conseil.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'actualites', component: ActualitesComponent },
  { path: 'article/:id', component: ArticleComponent }, // Vérifie cette route pour l'article
  { path : 'evenements', component : EvenementsComponent},
  { path: 'mentions-legales', component: MentionsLegalesComponent },
  { path: 'membres-conseil', component: MembresConseilComponent },
  {path : 'gallery', component: GalleryComponent},
  { path: '**', redirectTo: '' }
];
