import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {
  constructor() {}

  private cards = [
    {
      id: 'lore-ipsum',
      title: 'Événement Spécial Lore Ipsum',
      description: 'Un événement fictif pour démonstration avec des informations Lorem Ipsum.',
      imageUrl: 'https://scontent-cdg4-3.xx.fbcdn.net/v/t39.30808-6/466623632_122182456790220999_2194432795699181305_n.jpg?stp=dst-jpg_p526x395&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=njC4AiakIHMQ7kNvgGVbO7r&_nc_zt=23&_nc_ht=scontent-cdg4-3.xx&_nc_gid=AvICecF9tf7hN5H2Vir3XY_&oh=00_AYAuYZd3rnWYS5mvLEI_98D6Qv329bbUp9Re9eu3MPuZJA&oe=6749458B',
      link: '/article/lore-ipsum', // Lien valide vers la page de l'article
      pages: ['home', 'evenements'],
      category: 'Événements'  // Ajout de la catégorie
    },
    {
      id: 'open-carnassiers',
      title: 'Open Carnassiers 29 Juin 2024',
      description: 'Waouhh ! Quelle première édition de l\'open carnassier Vilaine',
      imageUrl: 'assets/images/evenement/final.jpg',
      link: '/article/open-carnassiers',
      pages: ['evenements'],
      category: 'Concours'  // Ajout de la catégorie

    },
  
    {
      id: 'concours-belles-prises',
      title: 'Concours plus Belles Prises 🐟🌟',
      description: 'Partagez vos plus belles prises avec nous et tentez de gagner une récompense !',
      imageUrl: 'assets/images/info/declaration.jpg',
      link: '/article/concours-belles-prises',
      pages: ['home', 'actualites'], // S'affiche sur Home et Actualités,
      category: 'Concours'  // Ajout de la catégorie

    },
  ];

  // Retourne les cartes pour une page donnée
  getCardsForPage(page: string) {
    return this.cards.filter(card => card.pages.includes(page));
  }

  getCardsByCategory(category: string) {
    if (category === 'Tous') {
      return this.cards;  // Si "Tous" est sélectionné, retourne toutes les cards
    }
    return this.cards.filter(card => card.category === category); // Filtre par catégorie
  }

}
