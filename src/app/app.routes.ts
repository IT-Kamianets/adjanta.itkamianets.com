import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home';
import { GalleryComponent } from './components/gallery';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: '**', redirectTo: '' }
];
