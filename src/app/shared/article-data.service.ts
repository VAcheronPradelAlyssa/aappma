import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {
  constructor() {}

  private articles = [
    {
      id: 'parcours-passion-tranhaleux',
      title: 'Parcours de pêche label passion - La Vilaine à Tranhaleux',
      imageUrl: 'assets/images/evenement/final.jpg',
      content: `
        <p>Le parcours international de pêche au coup de la Vilaine à Tranhaleux sur la commune de Rieux a été labellisé Parcours Passion par la Fédération Nationale de la Pêche en France FNPF 🥳😃</p>
        <p>🚙 Ce parcours de presque 4 kilomètres de long est très accessible depuis la D114, entre Rieux et le pont de Cran. Un chemin en rive gauche est praticable en voiture sur l'ensemble du linéaire ! Ce qui facilite l'installation d'un pêcheur n'importe où sur le parcours 👌</p>
        <p>Bravo à la Fédération de Pêche du Morbihan et l'Aappma Brochet de Basse Vilaine pour ce magnifique parcours ! 👏</p>
        <p>#pecheaucoup #lavilaine #régionbretagne #canauxdebretagne #pecheauleurre #bretagneterredepêche</p>
      `,
      facebookLink: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0kGMEziD3Nmu3pEMgeHzJXVArSeTLUtBzqeytxLGSdJUcTNzPbnVtzTniy8ekGUQ2l%26id%3D61556629982632&show_text=true&width=500'
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
        
      `,
      facebookLink: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0kGMEziD3Nmu3pEMgeHzJXVArSeTLUtBzqeytxLGSdJUcTNzPbnVtzTniy8ekGUQ2l%26id%3D61556629982632&show_text=true&width=500'

    }
  ];

  getArticleById(id: string) {
    return this.articles.find(article => article.id === id); // Recherche l'article
  }
}
