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
    { url: '/assets/images/brochets/brochet.jpg', category: 'Brochets' },
    { url: '/assets/images/carpes/antoine.jpg', category: 'Carpes' },
    { url: '/assets/images/carpes/carpe2.jpg', category: 'Carpes' },
    { url: '/assets/images/carpes/carpe3.jpg', category: 'Carpes' },
    { url: '/assets/images/carpes/carpeendu.jpg', category: 'Carpes' },
    { url: '/assets/images/silures/silure.jpg', category: 'Silures' },
    { url: '/assets/images/silures/silure2.jpg', category: 'Silures' },
    { url: '/assets/images/autres1.jpg', category: 'Autres' },
  ];

  filteredImages = [...this.images]; // Liste des images filtrées en fonction de la catégorie sélectionnée
  groupedImages: { [key: string]: { url: string; category: string }[] } = {};

  selectedImage: string | null = null; // Image sélectionnée pour affichage agrandi

  ngOnInit(): void {
    this.filterImages(); // Initialisation des images filtrées et groupées
  }

  /**
   * Filtre les images en fonction de la catégorie sélectionnée
   */
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

  /**
   * Groupe les images par catégorie pour un affichage organisé
   */
  groupImagesByCategory(): void {
    this.groupedImages = this.filteredImages.reduce((groups, image) => {
      const category = image.category;
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(image);
      return groups;
    }, {} as { [key: string]: { url: string; category: string }[] });
  }

  /**
   * Récupère les clés des groupes d'images
   */
  getKeys(object: { [key: string]: any }): string[] {
    return Object.keys(object);
  }

  /**
   * Ouvre une image en plein écran
   */
  openImage(imageUrl: string): void {
    this.selectedImage = imageUrl;
  }

  /**
   * Ferme l'image affichée en plein écran
   */
  closeImage(): void {
    this.selectedImage = null;
  }
}
