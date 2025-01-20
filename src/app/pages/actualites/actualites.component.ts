import { Component, OnInit } from '@angular/core';
import { CardDataService } from '../../shared/card-data.service';
import { CardComponent } from '../../shared/card/card.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actualites',
  standalone: true,
  imports: [CommonModule, RouterModule, CardComponent,FormsModule],
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.scss']
})
export class ActualitesComponent implements OnInit {
  stop : string = '/assets/images/stop.jpg';
  cards: { imageUrl: string; title: string; description: string; link: string; }[] = []; // Typage explicite
  categories: string[] = ['Tous', 'Concours', 'Événements', 'Animations', 'Info']; // Catégories disponibles
  selectedCategory: string = 'Tous';  // Catégorie sélectionnée

  constructor(private cardDataService: CardDataService) {}

  ngOnInit() {
    this.cards = this.cardDataService.getCardsForPage('actualites'); // Récupère les cartes spécifiques à Home
  }
  filterCards(): void {
    this.cards = this.cardDataService.getCardsByCategory(this.selectedCategory);

}
}