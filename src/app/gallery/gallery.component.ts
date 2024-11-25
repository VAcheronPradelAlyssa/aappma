import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  standalone: true,
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  // Exemple de données d'images, cela peut venir d'un service
  categories = [
    {
      name: 'Carpes',
      images: [
        { src: 'assets/images/carpes/carpe1.jpg', alt: 'Carpe 1' },
        { src: 'assets/images/carpes/carpe2.jpg', alt: 'Carpe 2' },
        { src: 'assets/images/carpes/carpe3.jpg', alt: 'Carpe 3' }
      ]
    },
    {
      name: 'Silures',
      images: [
        { src: 'assets/images/silures/silure1.jpg', alt: 'Silure 1' },
        { src: 'assets/images/silures/silure2.jpg', alt: 'Silure 2' }
      ]
    },
    // Ajouter d'autres catégories ici
  ];

  selectedCategory: string = 'all'; // Valeur par défaut pour afficher toutes les espèces

  constructor() { }

  ngOnInit(): void {
  }

  // Filtrer les images en fonction de la catégorie sélectionnée
  filterImages(category: string) {
    this.selectedCategory = category;
  }
}
