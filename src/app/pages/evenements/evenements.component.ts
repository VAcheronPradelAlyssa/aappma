import { Component, OnInit } from '@angular/core';
import { CardDataService } from '../../shared/card-data.service';
import { CardComponent } from '../../shared/card/card.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-evenements',
  standalone: true,
  imports: [CommonModule, RouterModule, CardComponent],
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.scss']
})
export class EvenementsComponent implements OnInit {
  cards: { imageUrl: string; title: string; description: string; link: string; }[] = []; // Typage explicite


  constructor(private cardDataService: CardDataService) {}

  ngOnInit() {
    this.cards = this.cardDataService.getCardsForPage('evenements'); // Récupère les cartes spécifiques à Home
  }
}
