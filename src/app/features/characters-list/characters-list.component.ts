import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickAndMortyService } from '../../core/services/rick-and-morty.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  characters: any[] = [];
  loading = true;
  error: string | null = null;

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.rickAndMortyService.getAllCharacters().subscribe({
      next: (response) => {
        this.characters = response.results;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erreur de chargement';
        this.loading = false;
      }
    });
  }
}