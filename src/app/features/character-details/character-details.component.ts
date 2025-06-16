import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RickAndMortyService } from '../../core/services/rick-and-morty.service';

@Component({
  selector: 'app-character-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent {
  characterId: number | null = null;
  character: any = null;
  error: string | null = null;

  constructor(private rickAndMortyService: RickAndMortyService) {}

  searchCharacter(): void {
    if (!this.characterId || this.characterId <= 0) {
      this.error = "ID invalide";
      return;
    }

    this.error = null;
    this.character = null;

    this.rickAndMortyService.getCharacterById(this.characterId).subscribe({
      next: (character) => {
        this.character = character;
      },
      error: () => {
        this.error = "Personnage non trouvé";
      }
    });
  }
}