import { Component, OnInit } from '@angular/core';
import { CardDataService } from '../../shared/card-data.service';
import { CardComponent } from '../../shared/card/card.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards: { imageUrl: string; title: string; description: string; link: string; }[] = []; // Typage explicite
  cheminImage: string = 'assets/images/AAPPMA B1.png'; // Image locale
  rodoir: string = 'assets/images/rodoir.jpg';
  rieux: string='assets/images/rieux.jpg';
  constructor(private cardDataService: CardDataService) {}

  ngOnInit() {
    this.cards = this.cardDataService.getCardsForPage('home'); // Récupère les cartes spécifiques à Home
  }
}
