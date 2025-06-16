import { Routes } from '@angular/router';
import { CharactersListComponent } from './features/characters-list/characters-list.component';
import { CharacterDetailsComponent } from './features/character-details/character-details.component';

export const routes: Routes = [
  { 
    path: 'characters', 
    component: CharactersListComponent,
    title: 'Liste des personnages' 
  },
  { 
    path: 'details', 
    component: CharacterDetailsComponent,
    title: 'Détails du personnage' 
  },
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
  { path: '**', redirectTo: 'characters' } // Redirection pour les routes inconnues
];