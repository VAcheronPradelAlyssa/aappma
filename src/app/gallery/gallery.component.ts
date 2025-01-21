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
  categories = ['Tous les poissons', 'Brochets', 'Carpes', 'Silures','Perches','Sandres','Mulets', 'Autres'];
  selectedCategory = 'Tous les poissons';

  images = [
    { url: '/assets/images/brochets/brochet.jpg', category: 'Brochets', title: '' },
    { url: '/assets/images/brochets/open20241.jpg', category: 'Brochets', title: 'Open Carnassiers 2024' },
    { url: '/assets/images/carpes/antoine.jpg', category: 'Carpes', title: 'Etang du Rodoir' },
    { url: '/assets/images/carpes/carpe2.jpg', category: 'Carpes', title: '' }, 
    { url: '/assets/images/carpes/carpe3.jpg', category: 'Carpes', title: 'Enduro 2023' },
    { url: '/assets/images/carpes/carpeendu.jpg', category: 'Carpes', title: 'Enduro 2023' }, 
    { url: '/assets/images/carpes/carpeendu4.jpg', category: 'Carpes', title: 'Enduro 2023' },
    { url: '/assets/images/carpes/carpeendu5.jpg', category: 'Carpes', title: 'Enduro 2023' }, 
    { url: '/assets/images/carpes/carpeendu6.jpg', category: 'Carpes', title: 'Enduro 2023' }, 
    { url: '/assets/images/carpes/carpeendu7.jpg', category: 'Carpes', title: 'Enduro 2023' }, 
    { url: '/assets/images/carpes/carpeendu8.jpg', category: 'Carpes', title: '1er poisson de l\'enduro 2023, 4kg 130' }, 
    { url: '/assets/images/carpes/carpeendu9.jpg', category: 'Carpes', title: 'Enduro 2023' }, 
    { url: '/assets/images/carpes/carpeendu10.jpg', category: 'Carpes', title: 'Enduro 2023' }, 
    { url: '/assets/images/carpes/endu2024.jpg', category: 'Carpes', title: 'Enduro 2024' },
    { url: '/assets/images/carpes/endu20242.jpg', category: 'Carpes', title: 'Enduro 2024' },
    { url: '/assets/images/carpes/endu20243.jpg', category: 'Carpes', title: 'Enduro 2024' },
    { url: '/assets/images/carpes/endu20244.jpg', category: 'Carpes', title: 'Enduro 2024' },
    { url: '/assets/images/carpes/endu20245.jpg', category: 'Carpes', title: 'Enduro 2024' },
    { url: '/assets/images/carpes/endu20246.jpg', category: 'Carpes', title: 'Enduro 2024' },
    { url: '/assets/images/carpes/endu20247.jpg', category: 'Carpes', title: 'Enduro 2024' },
    { url: '/assets/images/perches/perche.jpg', category: 'Perches', title: '' },
    { url: '/assets/images/perches/perche2.jpg', category: 'Perches', title: '' },
    { url: '/assets/images/perches/perche4.jpg', category: 'Perches', title: '' },
    { url: '/assets/images/perches/perche5.jpg', category: 'Perches', title: '' },
    { url: '/assets/images/perches/perche7.jpg', category: 'Perches', title: '' },
    { url: '/assets/images/sandres/sandre2.jpg', category: 'Sandres', title: '' },
    { url: '/assets/images/sandres/sandre3.jpg', category: 'Sandres', title: '' },
    { url: '/assets/images/sandres/sandre4.jpg', category: 'Sandres', title: '' },
    { url: '/assets/images/sandres/sandre5.jpg', category: 'Sandres', title: '' },
    { url: '/assets/images/sandres/sandre6.jpg', category: 'Sandres', title: '' },
    { url: '/assets/images/sandres/sandre8.jpg', category: 'Sandres', title: '' },
    { url: '/assets/images/sandres/sandre9.jpg', category: 'Sandres', title: '' },
    { url: '/assets/images/sandres/sandre10.jpg', category: 'Sandres', title: '' },
    { url: '/assets/images/sandres/sandre11.jpg', category: 'Sandres', title: '' },
    { url: '/assets/images/sandres/sandre12.jpg', category: 'Sandres', title: '' },
    { url: '/assets/images/sandres/sandre13.jpg', category: 'Sandres', title: '' },
    { url: '/assets/images/sandres/sandre14.jpg', category: 'Sandres', title: '' },
    { url: '/assets/images/sandres/sandres.jpg', category: 'Sandres', title: '' },
    { url: '/assets/images/sandres/open2024.jpg', category: 'Sandres', title: 'Open Carnassiers 2024' },
    { url: '/assets/images/sandres/open20242.jpg', category: 'Sandres', title: 'Open Carnassiers 2024' },
    { url: '/assets/images/sandres/open20243.jpg', category: 'Sandres', title: 'Open Carnassiers 2024' },
    { url: '/assets/images/mulets/mulet.jpg', category: 'Mulets', title: '' },
    { url: '/assets/images/silures/silure.jpg', category: 'Silures', title: '' },
    { url: '/assets/images/silures/silure2.jpg', category: 'Silures', title: '' },
    { url: '/assets/images/canard.jpg', category: 'Autres', title: '🦆🦆🦆' }
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
