import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importation correcte des modules nécessaires
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  categories = ['Tous les poissons', 'Brochets', 'Carpes', 'Silures', 'Autres'];
  selectedCategory = 'Tous les poissons';

  images = [
    { url: '/assets/images/brochets/brochet.jpg', category: 'Brochets', title: 'Brochet pêché à Nantes le 12 juin' },
    { url: '/assets/images/carpes/antoine.jpg', category: 'Carpes', title: 'Carpe pêchée le 10 janvier à Redon' },
    { url: '/assets/images/carpes/carpe2.jpg', category: 'Carpes', title: '' }, // Pas de titre
    { url: '/assets/images/carpes/carpe3.jpg', category: 'Carpes', title: 'Belle carpe au lever du soleil' },
    { url: '/assets/images/carpes/carpeendu.jpg', category: 'Carpes', title: '' }, // Pas de titre
    { url: '/assets/images/silures/silure.jpg', category: 'Silures', title: 'Silure géant capturé en rivière' },
    { url: '/assets/images/silures/silure2.jpg', category: 'Silures', title: '' }, // Pas de titre
    { url: '/assets/images/autres1.jpg', category: 'Autres', title: 'Un autre poisson impressionnant' },
  ];

  filteredImages = [...this.images]; // Liste des images filtrées en fonction de la catégorie sélectionnée
  groupedImages: { [key: string]: { url: string; category: string; title: string }[] } = {};

  selectedImage: string | null = null; // Image sélectionnée pour affichage agrandi

  ngOnInit(): void {
    this.filterImages(); // Initialisation des images filtrées et groupées
  }

  filterImages(): void {
    if (this.selectedCategory === 'Tous les poissons') {
      this.filteredImages = [...this.images];
    } else {
      this.filteredImages = this.images.filter(
        (image) => image.category === this.selectedCategory
      );
    }
    this.groupImagesByCategory(); // Met à jour les groupes après filtrage
  }

  groupImagesByCategory(): void {
    this.groupedImages = this.filteredImages.reduce((groups, image) => {
      const category = image.category;
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(image);
      return groups;
    }, {} as { [key: string]: { url: string; category: string; title: string }[] });
  }

  getKeys(object: { [key: string]: any }): string[] {
    return Object.keys(object);
  }

  openImage(imageUrl: string): void {
    this.selectedImage = imageUrl;
  }

  closeImage(): void {
    this.selectedImage = null;
  }
}
