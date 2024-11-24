import { Component, OnInit } from '@angular/core';
import { CardDataService } from '../../shared/card-data.service';
import { CardComponent } from '../../shared/card/card.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards: { imageUrl: string; title: string; description: string; link: string; }[] = []; // Typage explicite
  cheminImage:any = "https://scontent-cdg4-3.xx.fbcdn.net/v/t39.30808-6/468084508_3957184854564210_7756495847218067337_n.jpg?stp=dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=8sHne0AvQD4Q7kNvgGsRldO&_nc_zt=23&_nc_ht=scontent-cdg4-3.xx&_nc_gid=A0lEdN2a5hDPwfBoSkZwxM8&oh=00_AYDFORw9wkPqIYe-QQB5PK7Q5q_8ZpEgO5H655ivVyHiDg&oe=67493130";


  constructor(private cardDataService: CardDataService) {}

  ngOnInit() {
    this.cards = this.cardDataService.getCardsForPage('home'); // Récupère les cartes spécifiques à Home
  }
}
