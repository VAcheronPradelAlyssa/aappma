import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

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
      imageUrl: 'assets/images/parcourslabel.jpg',  // Modification du chemin de l'image
      link: '/article/parcours-passion-tranhaleux',
      pages: ['home', 'actualites'],
      category: 'Info'
    },
    {
      id: 'open-carnassiers',
      title: 'Open Carnassiers 29 Juin 2024',
      description: 'Waouhh ! Quelle première édition de l\'open carnassier Vilaine',
      imageUrl: 'assets/images/finalopen2024.jpg',
      link: '/article/open-carnassiers',
      pages: ['evenements','home', 'actualites'],
      date:'2024-06-29',
      category: 'Événements'  // Ajout de la catégorie
    },
  
    {
      id: 'concours-belles-prises',
      title: 'Concours plus Belles Prises 🐟🌟',
      description: 'Partagez vos plus belles prises avec nous et tentez de gagner une récompense !',
      imageUrl: '/assets/images/finalenduro2024.jpg',
      link: '/article/concours-belles-prises',
      pages: ['actualites'], // S'affiche sur Home et Actualités,
      category: 'Concours'  // Ajout de la catégorie

    },
    {
      id: 'enduro-carpe-2024',
      title: 'Enduro Carpe Septembre 2024',
      description:'Clap de fin! elles nous auront boudées jusqu\'au bout!',
      imageUrl: '/assets/images/finalenduro2024.jpg',
      link: '/article/enduro-carpe-2024',
      pages: ['actualites', 'home'],
      date:'2024-09-13',
      category: 'Événements'
      
    },
    {
      id:'rhb-2024',
      title: 'Rencontres Halieutiques Bretonnes',
      description:'A vos Agendas!',
      imageUrl:'assets/images/rhb2024.jpg',
      link:'/article/rhb-2024',
      pages: ['actualites','evenements'],
      date:'2024-10-05',
      category: 'Événements'
    },
    {
      id:'ag-2024',
      title:'Assemblée Générale - Retour sur le 4 Février 2024',
      description:'Ce dimanche 4 février 2024, s\'est déroulée notre assemblée générale.',
      imageUrl:'assets/images/ag.jpg',
      link:'/article/ag-2024',
      pages: ['actualites'],
      category:'Info'
    },
    {
    id:'festival-national',
    title:'1er Festival National de la Pêche 23 au 25 mai 2025',
    description:'Le GIFAP organise le 1er Festival National de la Pêche',
    imageUrl:'assets/images/festival2025.jpg',
    link:'/article/festival-national',
    date:'2025-05-25',
    pages:['actualites','evenements'],
    category:'Animations'
    }
   
  ];

  // Retourne les cartes pour une page donnée
  getCardsForPage(page: string) {
    return this.cards.filter(card => card.pages.includes(page));
  }
  getUpcomingEvents() {
    const currentDate = new Date();
    return this.cards.filter(card => card.date && new Date(card.date) > currentDate);
  }

  getPastEvents() {
    const currentDate = new Date();
    return this.cards.filter(card => card.date && new Date(card.date) <= currentDate);
  }

  getCardsByCategory(category: string) {
    if (category === 'Tous') {
      return this.cards;  // Si "Tous" est sélectionné, retourne toutes les cards
    }
    return this.cards.filter(card => card.category === category); // Filtre par catégorie
  }

}
