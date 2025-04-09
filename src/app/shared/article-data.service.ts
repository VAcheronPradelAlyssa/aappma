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
      imageUrl: '/assets/images/parcourslabel.jpg',
      content: `
        <p>Le parcours international de pêche au coup de la Vilaine à Tranhaleux sur la commune de Rieux a été labellisé Parcours Passion par la Fédération Nationale de la Pêche en France FNPF 🥳😃</p>
        <p>🚙 Ce parcours de presque 4 kilomètres de long est très accessible depuis la D114, entre Rieux et le pont de Cran. Un chemin en rive gauche est praticable en voiture sur l'ensemble du linéaire ! Ce qui facilite l'installation d'un pêcheur n'importe où sur le parcours 👌</p>
        <p>Bravo à la Fédération de Pêche du Morbihan et l'Aappma Brochet de Basse Vilaine pour ce magnifique parcours ! 👏</p>
      `,
      facebookLink: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0kGMEziD3Nmu3pEMgeHzJXVArSeTLUtBzqeytxLGSdJUcTNzPbnVtzTniy8ekGUQ2l%26id%3D61556629982632&show_text=true&width=500'
    },
    {
      id: 'open-carnassiers',
      title: 'Open Carnassiers 29 Juin 2024',
      imageUrl: '/assets/images/finalopen2024.jpg',
      content: ` <p>Waouhh ! Quelle première édition de l'open carnassier vilaine en partenariat avec La Clef des Champs - Saison de pêche, Hearty Rise et  flashmer que nous remercions pour la très belle dotation.
                </p>
        <p>C'est une occasion pour nous de vous annoncer la signature d'une expérimentation avec la ddtm 56 concernant l'arrêt de la pêche professionnelle entre Rieux et le pont de Cran, sur le parcours de Tranhalleux. C'est une victoire pour la Biodiversité ! Merci pour le travail mené en collaboration avec l'adapaef 56, le collectif de pêcheurs en colère, la Fédération de Pêche du Morbihan et nos élus locaux très impliqués sur le dossier.</p>
        <p>Malgré un temps très instable, les courageuses 17 équipes ont bravées la pluie ce matin de 7h à 12h30.</p>
 <p>55 poissons, brochets, sandres, silure, perches et nombreux black bass ont été capturés et remis à l'eau après mesures. </p>
<p>Seulement 3 équipes sans poisson.</p>
<p>Le podium 🏆</p>
<p>🥇Sebilo Rodolphe - Hérault Maxime
 3 black bass 4 sandres</p>
<p>🥈Caudal Dylan - Gerligan Maxime 
6 sandres</p>
<p>🥉Roque Eric - Cornet Corentin
 1 perche 1 brochet  4 black bass.</p>
<p>Merci à vous tous 
A l'année prochaine !🎉</p>`,     
facebookLink: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Faappmabbv56%2Fposts%2Fpfbid0MghgQKRiNQ2Lo1jxNppcHPoHxWgR52FNS46rLVcMwbMpRcoVnkPVUSvXs4BaBHU8l&show_text=true&width=500",

    },
    {
      id: 'concours-belles-prises',
      title: 'Concours plus Belles Prises 🐟🌟 Fini le 15/11/2024',
      imageUrl: "https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/432241108_430472429641870_9089232441264919364_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=GxuNxCyxJogQ7kNvgFOKXKP&_nc_zt=23&_nc_ht=scontent-cdg4-2.xx&_nc_gid=ASoyKMk1Ms4prT5HwG4MXMN&oh=00_AYAnot7HboiOfG6_TFeUeIJ7pPOooODQjVUOhsXneSLb8Q&oe=674988F8",  // Pas d'image ici, peut être remplacé par une image par défaut
      content: `
      Fini le 15/11/2024
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
    

    },
    {
      id:'enduro-carpe-2024',
      title:'Enduro Carpe Septembre 2024',
      imageUrl:'/assets/images/finalenduro2024.jpg',
      content : 
      `
      <p>Clap de fin!</p>
      <p>Un 3e enduro très compliqué, seulement 12 poissons auront rejoins l'épuisette de 6 équipes sur 18 pour environ 70kg.
      Le changement brutal de température mêlé à une pêche professionnelle toujours aussi intensive sur la basse vilaine n'auront pas facilité les choses .</p>
      <p>Nous retiendrons une ambiance géniale entre les participants! Des supers moments partagés avec tous les bénévoles de l'aappma qui se sont surpasser pour réussir l'événement ! Il faut bien se faire des fleurs 😉</p>
      <p>Félicitations à Maxime et Paloma pour leur victoire avec 3 poissons! </p>
      <p>On espère déjà vous retrouver pour la 4e édition en 2025.
Un grand merci à tous!</p>

      `,
      facebookLink: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Faappmabbv56%2Fposts%2Fpfbid0g592vc43jgkHGzLYL6fXEH36s1pxNdhT4Zf2RToS5G8MFt7okhgyx53MMNQrWuNkl&show_text=true&width=500'

      
    },
    {
      id:'rhb-2024',
      title:'Rencontres Halieutiques Bretonnes 2024',
      imageUrl:'/assets/images/rhb2024.jpg',
      content:
      `
      <p>C'est toujours un plaisir de recevoir, sur notre territoire de gestion, cette compétition conviviale.</p>
      <p>Les inscriptions sont ouvertes dès maintenant pour le 5 octobre 2024 ! 🎉🎣</p>
      <p> Rendez-vous sur le site de la fédération:</p>
      <a href="https://morbihan.federationpeche.fr/actualite/2743/372-rencontres-halieutiques-bretonnes-2024.htm?fbclid=IwZXh0bgNhZW0CMTAAAR29Z2detjVYybgj5AM5XBTV7vC-y0rD-wW9j8MLMdZyXUBTLBLE0fMqyV0_aem_HLZIYSKbxb0kYV_28aZ3YA">https://morbihan.federationpeche.fr/actualite/2743/372-rencontres-halieutiques-bretonnes-2024.htm?fbclid=IwZXh0bgNhZW0CMTAAAR29Z2detjVYybgj5AM5XBTV7vC-y0rD-wW9j8MLMdZyXUBTLBLE0fMqyV0_aem_HLZIYSKbxb0kYV_28aZ3YA</a>
      `
    },
    {
      id:'ag-2024',
      title:'Assemblée Générame - Retour sur l\'événement du 4 févirier 2024',
      imageUrl:'/assets/images/ag.jpg',
      content: `
      <p>Ce dimanche 4 février, s'est déroulé notre assemblée générale.</p>
      <p>Nous remercions une nouvelle fois la présence de près de 90 adhérents ainsi que la participation de la <a href="https://www.facebook.com/federationpechemorbihan">Fédération de Pêche du Morbihan</a>Fédération de Pêche du Morbihan représentée par son Président Pierrick Courjal.
                Cela nous pousse à travailler encore plus pour votre loisirs et la protection des milieux aquatiques.
                Nous pouvons nous réjouir que notre CA est ENFIN au complet! En effet 6 nouveaux membres ont été élus et vont maintenant rejoindre notre équipe ambitieuse et dynamique.
                Nous avons également eu deux demandes de formation garderie! Nous allons maintenant contacter la fédération de peche du Morbihan.
                </p>
            
            <p>Nous avons également eu deux demandes de formation garderie! Nous allons maintenant contacter la fédération de peche du Morbihan.</p>
            
            
            <p>A travers cette assemblée générale, nous avons pu échanger autours des actions menées en 2023:</p>
            <ul>
                <li>La pose de cages végétalisées au rodoir comme support de ponte et protection contre les attaques de cormorans, véritable fléau pour les populations piscicoles ! Nous en appelons à la mobilisation des services de l'État pour une prise de conscience et pour autoriser la régulation des populations !</li>
                <li>Les divers empoissonnements</li>
                <li>Les manifestations: enduro carpe et rencontres halieutiques.</li>
                <li>Les actions menées contre le projet d'arrêté de pêche en Morbihan 2024 et la pêche professionnelle abusive.</li>
            </ul>

            <p>Nous avons pu expliquer la nouvelle réglementation 2024 sur les étangs du rodoir et Kernevy concernant la double maille. Nous avons également présenté les nouveaux parcours de pêche à la carpe de nuit.</p>
            
            <p>Le club Rieux pêche compétition, qui représente notre Aappma lors des concours FFPS, nous a fait un compte-rendu de l'année 2023. En 2024, nous reconduisons l'enduro carpe du 6 au 8 septembre et nous relançons un open carnassier en novembre sur l'étang du rodoir.</p>

            <p>Vous avez été nombreux à souhaiter participer à des entretiens de berges. Nous allons y travailler rapidement et poser des dates avant les différentes ouvertures. Merci pour ce moment de partage convivial nécessaire pour que votre Aappma puisse continuer à travailler sereinement.</p>
      `
    },
    {
      id:'festival-national',
      title:'1er Festival National de la Pêche 23 au 25 mai 2025',
      imageUrl:"/assets/images/festival2025.jpg",
      content:`<p>🟢 Le GIFAP annonce un « Festival National de la Pêche » en mai 2025 !</p>
      <p>→ Après plusieurs mois de travail en Commission GIFAP, toutes les marques partenaires ont validé leur participation :
      Delalande, Daiwa, Fun Fishing, Fiiish, Flashmer, Lemer, Rapala VMC, Sensas, Illex, Sert Garbolino, Shimano, Ultimate Fishing, Cap River, Flashmer, Mepps, Pafex, Powerline, Pure Fishing, Mitchel, Berkley, Inedis Territoires nature, Pacific pêche, Rive, Pecheur.com, Info pêche, Fish Friender, La Pêche et les Poissons… et la FNPF 👍</p>
      <p>🎣 Toutes techniques, avec animations, démonstrations, essais de matériel, du bord ou embarqué, espaces d’animation en bassin… face au grand Hall.
      Sur plusieurs niveaux, plateau TV, deux salles de conférence simultanées, bassins de démo, espace « longues cannes », une "nocturne festive", espace jeunes, influenceurs, moniteur-guides, nautisme… sur 3 jours d’expo ! 👏
      Parc Exponantes du 23 au 25 mai 2025 </p>
      <a href="https://www.gifap.fr/le-gifap-annonce-un-festival.../">Informations</a>`
    },
    {
      id:'ag2025',
      title:'Assemblée Générale le 2 Février 2025',
      imageUrl:'/assets/images/ag2025.jpg',
      content:
      `
      
      `
    },
    {
      id:'a-g2025',
      title:'Assemblée Générale 2025',
      imageUrl:"/assets/images/a-g2025.jpg",
      content:`<p>Cette année, nous avons accueilli près de 50 adhérents venus malgré les intempéries, ainsi que la Fédération de Pêche du Morbihan, représentée par son Président, Pierrick Courjal.</p>
      <p>Lors de cette assemblée, nous avons échangé autour des actions menées en 2024 :</p>
      <ul>
      <li>Les alevinages réalisés à l’étang du Rodoir (gardons et carpes) et à l’étang de Kernevy (gardons et black-bass).</li>
      <li>Les divers entretiens effectués sur les sites et les postes de pêche.</li>
      <li>Les manifestations organisées : enduro carpe, open carnassier et rencontres halieutiques.</li>
      </ul>
      <p>Nous sommes également revenus sur la réglementation 2024 concernant la double maille sur les étangs du Rodoir et de Kernevy afin de répondre aux questions.
Par ailleurs, nous avons abordé la gestion du territoire de l’AAPPMA qui a été mise à jours.
Le parcours international de pêche au coup de la Vilaine à Tranhaleux sur la commune de Rieux a été franchement labellisé parcours passion par la Fédération Nationale de la Pêche en France FNPF </p>
      <p>Nous organiserons également la Fête de la Pêche le 8 juin 2025 au Show Burin à Kernevy, avec un stand pour présenter la pêche et l’association aux visiteurs.</p>
      <p>Merci à tous pour ce moment de partage convivial, essentiel pour permettre à votre AAPPMA de poursuivre ses actions sereinement.</p>`
    },
    {
      id:'open-carnassier2025',
      title:'Open Carnassiers 2025 Rieux - Pont du Cran',
      imageUrl:"/assets/images/carnassiers2025.jpg",
      content:`<p>Quoi de prévu le samedi 14 Juin? 🤔</p>
      <p>Rien? Et bien rejoignez nous pour notre open carnassiers vilaine à Rieux! 🎣</p>
      <p>En bateau, float tube ou kayak entre le port de rieux et le pont de cran.</p>
      <p>Limité à 30 équipes</p>
      <p>Inscription : aappmabbv@gmail.com</p>`
    }
  ];

  getArticleById(id: string) {
    return this.articles.find(article => article.id === id); // Recherche l'article
  }
}
