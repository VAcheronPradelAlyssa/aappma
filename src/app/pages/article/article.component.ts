import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleDataService } from '../../shared/article-data.service'; // Service pour récupérer l'article
import { CommonModule } from '@angular/common'; // Importer CommonModule
import { Location } from '@angular/common'; // Importer Location

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule], // Ajouter CommonModule ici
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: any;  // Stocke les détails de l'article

  constructor(
    private route: ActivatedRoute,
    private articleDataService: ArticleDataService, // Service pour récupérer l'article
    private location: Location  // Injecter Location pour le retour
  ) {}

  ngOnInit() {
    // Récupérer l'ID de l'article depuis l'URL
    const articleId = this.route.snapshot.paramMap.get('id');

    if (articleId) {
      // Récupérer l'article depuis le service
      this.article = this.articleDataService.getArticleById(articleId);

      if (!this.article) {
        console.error(`Article avec l'ID "${articleId}" introuvable.`);
      }
    }
  }
  goBack() {
    this.location.back(); // Utiliser la méthode back() pour revenir à la page précédente
  }
}
