import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {
  constructor() {}

  private articles = [
    {
      id: 'lore-ipsum',
      title: 'Événement Spécial Lore Ipsum',
      imageUrl: 'assets/images/lore-ipsum.jpg',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit...`
    },
    {
      id: 'open-carnassiers',
      title: 'Open Carnassiers 29 Juin 2024',
      imageUrl: 'assets/images/evenement/final.jpg',
      content: `Ce grand événement de pêche sportive...`
    },
    {
      id: 'concours-belles-prises',
      title: 'Concours plus Belles Prises 🐟🌟',
      imageUrl: 'assets/images/info/déclaration.jpg',
      content: `
        Si vous avez vous aussi capturé un poisson exceptionnel, n'hésitez pas à nous envoyer une déclaration accompagnée d'une photo à 
        <a href="mailto:aappmabbv@gmail.com">aappmabbv@gmail.com</a>. Nous serons ravis de partager votre exploit avec la communauté!

        En guise de récompense, chaque déclaration publiée recevra une petite surprise de notre part!

        <p>En participant à ce concours, vous avez la chance de recevoir des prix exceptionnels !</p>
        <p>Voici quelques informations supplémentaires pour participer :</p>
        <ul>
          <li>Envoyez vos photos de vos prises exceptionnelles avec une petite description.</li>
          <li>Les photos doivent être envoyées à l'adresse suivante : <a href="mailto:aappmabbv@gmail.com">aappmabbv@gmail.com</a>.</li>
        </ul>
      `
    }
  ];

  getArticleById(id: string) {
    return this.articles.find(article => article.id === id); // Recherche l'article
  }
}
