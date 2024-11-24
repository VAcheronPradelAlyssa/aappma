import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {
  constructor() {}

  private cards = [
    {
      id: 'parcours-passion-tranhaleux',
      title: 'Parcours de pêche label passion',
      description: 'Découvrez le parcours international de pêche au coup de la Vilaine à Tranhaleux, récemment labellisé Parcours Passion.',
      imageUrl: 'https://scontent-cdg4-3.xx.fbcdn.net/v/t39.30808-6/466623632_122182456790220999_2194432795699181305_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=njC4AiakIHMQ7kNvgGVbO7r&_nc_zt=23&_nc_ht=scontent-cdg4-3.xx&_nc_gid=ANFrUJcqX7cqaaJJumI4u0Y&oh=00_AYBXplR0ByEHmBnpiSg7_RcNJbA_7Ly9T-xaEY9LSdp1Kw&oe=67497DCB',
      link: '/article/parcours-passion-tranhaleux',
      pages: ['home', 'actualites'],
      category: 'Info'
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
