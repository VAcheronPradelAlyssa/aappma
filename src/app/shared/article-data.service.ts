import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {
  constructor() {}

  private articles = [
      {
        id: 'ag-2026',
        title: "Assemblée Générale 2026 : Préparez-vous !",
        imageUrl: '/assets/images/a-g2025.jpg',
        content: `
        <p>L'Assemblée Générale 2026 de l'AAPPMA Brochet de Basse Vilaine se tiendra le <strong>dimanche 22 février 2026</strong> à <strong>9h30</strong> à Saint-Dolay.</p>
<p>Nous vous invitons à réserver cette date dès maintenant !</p>
<p>Comme chaque année, ce sera l'occasion de faire le point sur la saison écoulée, d'échanger sur les projets à venir et de partager un moment convivial entre adhérents, bénévoles et partenaires.</p>
<ul>
  <li>Bilan des actions 2025</li>
  <li>Présentation des projets 2026</li>
  <li>Questions/réponses avec le conseil d'administration</li>
  <li>Moment de convivialité à l'issue de l'AG</li>
</ul>
<p>Nous comptons sur votre présence nombreuse !</p>
        `
      },
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
    },
    // --- Article Open Carnassier 2026 ---
    {
      id: 'open-carnassier-2026',
      title: 'Open Carnassier 2026 Rieux - Pont du Cran',
      imageUrl: '/assets/images/open2025/open2025.jpg',
      content: `
        <h2>Règlement Open Carnassier 2026</h2>
        <p><strong>Date :</strong> Samedi 6 juin 2026</p>
        <p><strong>Lieu :</strong> Vilaine, entre le port de Rieux et le pont du Cran</p>
        <h3>ARTICLE 1. - MODALITÉS DU CONCOURS</h3>
        <ul>
          <li>Concours au lancer ou au fouet avec leurres artificiels, poisson mort manié ou tirette.</li>
          <li>En équipe de deux, en bateau, float tube ou kayak (proximité immédiate obligatoire pour float/kayak).</li>
          <li>Quatre bateaux minimum pour la sécurité et la comptabilisation des prises.</li>
          <li>Inscription : 40€ par équipe, intégralement reversée dans la dotation.</li>
          <li>Port du gilet de sauvetage homologué obligatoire.</li>
        </ul>
        <h3>ARTICLE 2. – DÉROULEMENT</h3>
        <ul>
          <li>6h30 : Briefing et mise en place au niveau amont du parcours de Tranhaleux</li>
          <li>7h00 à 12h30 : Pêche (une seule manche)</li>
          <li>12h30 : Fin de l’épreuve</li>
          <li>13h00 : Remise des prix, verre de l’amitié</li>
        </ul>
        <p>Les black-bass ne sont pas comptabilisés (période d’ouverture non atteinte).</p>
        <h3>ARTICLE 3. - CONCURRENTS</h3>
        <ul>
          <li>Carte de pêche en cours de validité obligatoire.</li>
          <li>Limite de 30 équipes (15 minimum pour maintenir le concours).</li>
        </ul>
        <h3>ARTICLE 4. - EMBARCATIONS</h3>
        <ul>
          <li>Float tube, kayak, embarcations à rame, moteur électrique ou thermique (max 5 nœuds).</li>
          <li>Pêche uniquement depuis l’embarcation, traîne interdite.</li>
          <li>Respect des distances et sécurité entre concurrents.</li>
        </ul>
        <h3>ARTICLE 5. - ÉQUIPEMENTS ET LEURRES</h3>
        <ul>
          <li>Pêche exclusivement au lancer (toutes variantes autorisées).</li>
          <li>Matériel libre mais conforme à la législation et à l’éthique sportive.</li>
          <li>Une seule canne en action de pêche par pêcheur (cannes de réserve hors de l’eau autorisées).</li>
          <li>Épuisette autorisée.</li>
        </ul>
        <p>Pour toute question ou inscription : <a href="mailto:aappmabbv@gmail.com">aappmabbv@gmail.com</a></p>
        <p>Venez relever le défi et partager un moment de passion !</p>
      `
    },
    // --- Article Enduro Carpe 2026 ---
    {
      id: 'enduro-carpe-2026',
      title: 'Enduro Carpe 2026',
      imageUrl: '/assets/images/enduro2025/accueil.jpg',
      content: `
        <h2>Déroulement de l’Enduro Carpe 2026</h2>
        <ul>
          <li><strong>Vendredi 18 septembre</strong></li>
          <ul>
            <li>8h : Accueil des participants au PC par l’accès 1 (voir plan ci-dessous)</li>
            <li>8h45 : Tirage au sort des postes</li>
            <li>9h15 : Départ sur les postes puis installation</li>
            <li>10h : Début de l'amorçage et de la pêche</li>
          </ul>
          <li><strong>Samedi 19 septembre</strong></li>
          <ul>
            <li>Passage pour les pesées et éventuelles photos des carpes capturées lors de la nuit</li>
          </ul>
          <li><strong>Dimanche 20 septembre</strong></li>
          <ul>
            <li>À partir de 8h30 : Passage pour les pesées et éventuelles photos des carpes capturées au cours de la nuit</li>
            <li>11h00 : Fin de l'épreuve</li>
            <li>12h00 : Proclamation des résultats et remise des lots au PC</li>
            <li>13h00 : Apéritif de clôture offert</li>
          </ul>
        </ul>
        <p>Le déroulement reste identique à l’édition précédente, dans une ambiance conviviale et sportive. Pour toute question ou inscription : <a href="mailto:aappmabbv@gmail.com">aappmabbv@gmail.com</a></p>
      `
    },
    {
      id:'enduro-carpe-2025-fin',
      title:'Fin de l\'épreuve de l\'Enduro Carpe 2025',
      imageUrl:"/assets/images/enduro2025/accueil.jpg",
      content:`<p>🎣 Fin de l’Épreuve de l’Enduro Carpe de Rieux </p>
      <p>L’édition 2025 de notre enduro carpe, qui s’est déroulée du vendredi 12 au dimanche 13 septembre, s’est achevée aujourd'hui à 11h, suivie de la remise des prix à 12h.</p>
      <p>📊 Résultats :</p>
      <p>22 poissons capturés par 16 équipes, dont 4 capot</p>
      <p>Poids total des prises : 165,29 kg</p>
      <p>💡 Comparatif avec 2024 :</p>
      <p>L’an dernier, seulement 12 poissons avaient été sortis pour un peu plus de 70 kg, et 6 équipes sur 18 avaient enregistré des prises. Cette année marque donc une nette progression.</p>
<p>🏆 Record battu :</p>
<p>La plus grosse carpe jamais prise lors de notre enduro a affiché 16,210 kg sur la balance !</p>
<p>🙏 Un grand merci à tous les participants, bénévoles et partenaires pour leur engagement et leur bonne humeur tout au long du week-end. Cette édition restera une référence pour notre association et pour tous les passionnés de carpe.</p>
`,    
      
      facebookLink: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Faappmabbv56%2Fposts%2Fpfbid0Cb4zvPbC4HuNbmALYgAYBczqHeKfJDz2vxnJAtjHYJBi6xRNjsnq5tr7BeRsvNVYl&show_text=true&width=500'

      
},
    {
      id:'grand-honneur-enduro-2025',
      title:'🎣 Un grand honneur pour nous – Enduro Carpes 2025 🤝',
      imageUrl:"/assets/images/enduro2025/cloé.jpg",
      content:`
      <a href="https://www.facebook.com/associationlabougeotte.rieuse?locale=fr_FR" target="_blank" rel="noopener noreferrer">Merci à Labougeotte Rieuse pour l'article</a>
      <p>Le week-end dernier, lors de l’Enduro Carpes qui s’est déroulé du 12 au 14 septembre sur la Vilaine à Rieux, nous avons eu la satisfaction de remettre 1 000 € à l’association Chromosome du Bonheur, représentée par Cléo Renou . </p>
      <p>Cléo est une nageuse de haut niveau, membre de l’équipe de France de natation en sport adapté. Elle s’entraîne avec passion et régularité depuis des années et a remporté de nombreuses médailles en championnats de France, d’Europe et du monde. Elle a récemment participé à une grande compétition internationale en Thaïlande, où elle a de nouveau brillé par ses performances et son esprit sportif.</p>
      <p>Ce geste, bien au-delà d’un simple don, symbolise ce que nous voulons porter comme valeurs : solidarité, entraide, et soutien à celles et ceux qui œuvrent pour le bonheur et le bien-être de tous.</p>
      <p>Un grand merci à Cléo pour son exemple et son énergie, à tous les bénévoles et participants de l’enduro carpe, ainsi qu’à Monsieur le Maire Thierry Poulain pour sa présence. 🙏</p>
    
`,    
      
      facebookLink: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fassociationlabougeotte.rieuse%2Fposts%2Fpfbid02i8FKWRDbxcufo95t3TkKoZ2GgoEjSC7jWw3dNbz7dS5s9uznxkfG6pao465jDNjWl&show_text=true&width=500'
    },
    {
      id:'fin-open-carnassiers-2025',
      title:'🎣 Fin de l’Open Carnassiers 2025 – Une journée mémorable sur la Basse Vilaine ! 🐟',
      imageUrl:'assets/images/open2025/open2025.jpg',
      content:`<p>Ce samedi 14 juin, 38 pêcheurs passionnés se sont affrontés lors de l’Open Carnassiers organisé. Entre soleil, stratégie et coups de ligne bien placés, la compétition a tenu toutes ses promesses !</p>
      <p>📊 Résultats du podium :</p>
      <p>🥇 1ère place : Franck Leporcher & Julien Bethamy — 326 points</p>
      <p>🥈 2e place : Alex William & Jérémy Hervé — 198 points</p>
      <p>🥉 3e place : Quentin Cadoret & Bastien Briand — 188 points</p>
      <p>💥 Bilan des prises (total : 32 poissons) :</p>
      <p>🐊 Brochets : 0 (ils nous ont boudés cette année !)</p>
      <p>🐉 Sandres : 4 capturés — plus gros : 46 cm</p>
      <p>🎯 Perches : 12 capturées — plus grosse : 25.5 cm</p>
      <p>🎣 Black Bass : 10 capturés — plus gros : 32 cm</p>
      <p>🐋 Silures : 6 capturés — plus gros : 204 cm (oui, plus de 2 mètres 😲 !)</p>
      <p>👏 Un immense bravo à tous les participants pour leur sportivité et leur passion. Et un merci spécial aux bénévoles et partenaires qui ont rendu cet événement possible !</p>
      `,
      facebookLink: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Faappmabbv56%2Fposts%2Fpfbid02svaQBsDfMazoqs5LCoPKtbGR8DhuDwjkyEGing7ypAHYsPdsamsPbJvMDddWyE4tl&show_text=true&width=500',
    },
    
  ];

  getArticleById(id: string) {
    return this.articles.find(article => article.id === id); 
  }
}
