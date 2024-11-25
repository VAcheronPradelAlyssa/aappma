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
      imageUrl: 'https://scontent-cdg4-3.xx.fbcdn.net/v/t39.30808-6/466623632_122182456790220999_2194432795699181305_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=njC4AiakIHMQ7kNvgGVbO7r&_nc_zt=23&_nc_ht=scontent-cdg4-3.xx&_nc_gid=ANFrUJcqX7cqaaJJumI4u0Y&oh=00_AYBXplR0ByEHmBnpiSg7_RcNJbA_7Ly9T-xaEY9LSdp1Kw&oe=67497DCB',
      link: '/article/parcours-passion-tranhaleux',
      pages: ['home', 'actualites'],
      category: 'Info'
    },
    {
      id: 'open-carnassiers',
      title: 'Open Carnassiers 29 Juin 2024',
      description: 'Waouhh ! Quelle première édition de l\'open carnassier Vilaine',
      imageUrl: 'https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/468044031_3957271067888922_4578850896867517220_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Cws79U-iw3AQ7kNvgExuGS8&_nc_zt=23&_nc_ht=scontent-cdg4-2.xx&_nc_gid=APQJzBUDpK9JrWmKOsEdmKH&oh=00_AYD37GUVxTM2QWZKjdM_B3I8DFmlklmFiPO8iBDep6_ZtQ&oe=67497AF2',
      link: '/article/open-carnassiers',
      pages: ['evenements','home', 'actualites'],
      category: 'Événements'  // Ajout de la catégorie
    },
  
    {
      id: 'concours-belles-prises',
      title: 'Concours plus Belles Prises 🐟🌟',
      description: 'Partagez vos plus belles prises avec nous et tentez de gagner une récompense !',
      imageUrl: 'https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/432241108_430472429641870_9089232441264919364_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=GxuNxCyxJogQ7kNvgFOKXKP&_nc_zt=23&_nc_ht=scontent-cdg4-2.xx&_nc_gid=ASoyKMk1Ms4prT5HwG4MXMN&oh=00_AYAnot7HboiOfG6_TFeUeIJ7pPOooODQjVUOhsXneSLb8Q&oe=674988F8',
      link: '/article/concours-belles-prises',
      pages: ['actualites'], // S'affiche sur Home et Actualités,
      category: 'Concours'  // Ajout de la catégorie

    },
    {
      id: 'enduro-carpe-2024',
      title: 'Enduro Carpe Septembre 2024',
      description:'Clap de fin! elles nous auront boudées jusqu\'au bout!',
      imageUrl: 'https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/459127287_531553746200404_6780869274830948396_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=PUbqd0DawUUQ7kNvgFJgk_f&_nc_zt=23&_nc_ht=scontent-cdg4-2.xx&_nc_gid=AoXboxN2GsXStyv_hqIb0vE&oh=00_AYB_99DKoaah_hgTRzn5zrKlo5bi8sg_A9SicaWKEQ1rsQ&oe=674999AC',
      link: '/article/enduro-carpe-2024',
      pages: ['actualites', 'home'],
      category: 'Événements'
      
    },
    {
      id:'rhb-2024',
      title: 'Rencontres Halieutiques Bretonnes',
      description:'A vos Agendas!',
      imageUrl:'https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/468077942_3957373854545310_4527266139931081021_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ouf74vcvRVwQ7kNvgEn47MI&_nc_zt=23&_nc_ht=scontent-cdg4-2.xx&_nc_gid=AcPNvbAoyurutUCBXBilEro&oh=00_AYCXufOz_Tb-8my8D0boxJD0JM9v69e3E54wkJWQPj89-g&oe=674997AE',
      link:'/article/rhb-2024',
      pages: ['actualites','evenements'],
      category: 'Événements'
    },
    {
      id:'ag-2024',
      title:'Assemblée Générale - Retour sur le 4 Février 2024',
      description:'Ce dimanche 4 février 2024, s\'est déroulée notre assemblée générale.',
      imageUrl:'https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/468191010_3957268961222466_1212788754689115904_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tak_IXTch_IQ7kNvgFMC44I&_nc_zt=23&_nc_ht=scontent-cdg4-2.xx&_nc_gid=AeHSjNlQRmPl0HA3WTtJwm4&oh=00_AYDYa73TN96BwX02UHcxJGjBirWBDoSOkdPumuBmCYK6qw&oe=67499F2C',
      link:'/article/ag-2024',
      pages: ['actualites'],
      category:'Info'
    }
   
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
