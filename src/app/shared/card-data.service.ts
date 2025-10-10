import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {
  constructor() {}

  private cards = [
    {
      id:'open-carnassiers2025',
      title:'Open Carnassier 2025 Rieux - Pont du Cran',
      description:'Quoi de prévu le samedi 14 Juin? ',
      imageUrl:'assets/images/carnassiers2025.jpg',
      link:'/article/open-carnassier2025',
      date:'2025-06-14',
      pages:['evenements','concours','actualites'],
      category:'Concours',
      order: 7
      },
      {
        id:'a-g2025',
        title:'Ce dimanche 2 février s\'est déroulée notre assemblée générale.',
        description:'Cette année, nous avons accueilli près de 50 adhérents venus malgré les intempéries, ainsi que la Fédération de Pêche du Morbihan, représentée par son Président, Pierrick Courjal.',
        imageUrl:'assets/images/a-g2025.jpg',
        link:'/article/a-g2025',
        date:'2025-02-02',
        pages:['home','evenements','actualites'],
        category:'Info',
        order: 4
        },
    {
      id:'ag2025',
      title:'Assemblée Générale 2 Février 2025',
      description:'L\'Assemblée Générale a lieu le 2 février 2025 à 9h30 à Saint Dolay',
      imageUrl:'assets/images/ag2025coupe.jpg',
      link:'/article/ag2025',
      date:'2025-02-02',
      pages:['actualites','evenements',],
      category:'Info',
      order: 5
      },
    {
      id: 'parcours-passion-tranhaleux',
      title: 'Parcours de pêche label passion',
      description: 'Découvrez le parcours international de pêche au coup de la Vilaine à Tranhaleux, récemment labellisé Parcours Passion.',
      imageUrl: 'assets/images/parcourslabel.jpg',  // Modification du chemin de l'image
      link: '/article/parcours-passion-tranhaleux',
      pages: ['home', 'actualites'],
      category: 'Info',
      order: 3
    },
    {
      id: 'open-carnassiers',
      title: 'Open Carnassiers 29 Juin 2024',
      description: 'Waouhh ! Quelle première édition de l\'open carnassier Vilaine',
      imageUrl: 'assets/images/finalopen2024.jpg',
      link: '/article/open-carnassiers',
      pages: ['evenements', 'actualites'],
      date:'2024-06-29',
      category: 'Événements',  // Ajout de la catégorie
      order: 6
    },
  
    {
      id: 'concours-belles-prises',
      title: 'Concours plus Belles Prises 🐟🌟',
      description: 'Partagez vos plus belles prises avec nous et tentez de gagner une récompense !',
      imageUrl: '/assets/images/finalenduro2024.jpg',
      link: '/article/concours-belles-prises',
      pages: ['actualites'], // S'affiche sur Home et Actualités,
      category: 'Concours',  // Ajout de la catégorie
      order: 7

    },
    {
      id: 'enduro-carpe-2024',
      title: 'Enduro Carpe Septembre 2024',
      description:'Clap de fin! elles nous auront boudées jusqu\'au bout!',
      imageUrl: '/assets/images/finalenduro2024.jpg',
      link: '/article/enduro-carpe-2024',
      pages: ['actualites'],
      date:'2024-09-13',
      category: 'Événements',
      order: 8
      
    },
    {
      id:'rhb-2024',
      title: 'Rencontres Halieutiques Bretonnes',
      description:'A vos Agendas!',
      imageUrl:'assets/images/rhb2024.jpg',
      link:'/article/rhb-2024',
      pages: ['actualites','evenements'],
      date:'2024-10-05',
      category: 'Événements',
      order: 9
    },
    {
      id:'ag-2024',
      title:'Assemblée Générale - Retour sur le 4 Février 2024',
      description:'Ce dimanche 4 février 2024, s\'est déroulée notre assemblée générale.',
      imageUrl:'assets/images/ag.jpg',
      link:'/article/ag-2024',
      pages: ['actualites'],
      category:'Info',
      order: 10
    },
    {
    id:'festival-national',
    title:'1er Festival National de la Pêche 23 au 25 mai 2025',
    description:'Le GIFAP organise le 1er Festival National de la Pêche',
    imageUrl:'assets/images/festival2025.jpg',
    link:'/article/festival-national',
    date:'2025-05-25',
    pages:['actualites','evenements'],
    category:'Animations',
    order: 11
    },  
    {
      id:'enduro-carpe-2025-fin',
      title:'Fin de l\'épreuve de l\'Enduro Carpe 2025',
      description:'L’édition 2025 de notre enduro carpe, qui s’est déroulée du vendredi 12 au dimanche 13 septembre, s’est achevée aujourd\'hui à 11h, suivie de la remise des prix à 12h.',
      imageUrl:'assets/images/enduro2025/accueil.jpg',
      link:'/article/enduro-carpe-2025-fin',
          date:'2025-09-13',
      pages: ['actualites', 'evenements'],
      category:'Événements',
      order: 1
    },
    {
      id:'grand-honneur-enduro-2025',
      title:'Grand Honneur Enduro 2025',
      description:'🎣 Un grand honneur pour nous – Enduro Carpes 2025 🤝',
      imageUrl:'assets/images/enduro2025/cloé.jpg',
      link:'/article/grand-honneur-enduro-2025',
      pages: ['actualites'],
      category:'Info',
      order: 2
    },
    {
      id:'fin-open-carnassiers-2025',
      title:'🎣 Fin de l’Open Carnassiers 2025 – Une journée mémorable sur la Basse Vilaine ! 🐟',
      description:'Ce samedi 14 juin, 38 pêcheurs passionnés se sont affrontés lors de l’Open Carnassiers organisé. ',
      imageUrl:'assets/images/open2025/open2025.jpg',
      date:'2025-06-14',
      link:'/article/fin-open-carnassiers-2025',
      pages: ['actualites', 'evenements'],
      category:'Événements',
      order: 2
    }
  ];

  // Retourne les cartes pour une page donnée
  getCardsForPage(page: string) {
    return this.cards
      .filter(card => card.pages.includes(page))
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  }
  getUpcomingEvents() {
    const currentDate = new Date();
    return this.cards
      .filter(card => card.date && new Date(card.date) > currentDate)
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  }

  getPastEvents() {
    const currentDate = new Date();
    return this.cards
      .filter(card => card.date && new Date(card.date) <= currentDate)
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  }

  getCardsByCategory(category: string) {
    if (category === 'Tous') {
      return this.cards;  // Si "Tous" est sélectionné, retourne toutes les cards
    }
    return this.cards.filter(card => card.category === category); // Filtre par catégorie
  }

}
