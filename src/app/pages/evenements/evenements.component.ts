import { Component, OnInit } from '@angular/core';
import { CardDataService } from '../../shared/card-data.service';
import { CardComponent } from '../../shared/card/card.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-evenements',
  standalone: true,
  imports: [CommonModule, RouterModule, CardComponent],
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.scss']
})
export class EvenementsComponent implements OnInit {
  upcomingEvents: { imageUrl: string; title: string; description: string; link: string; }[] = [];
  pastEvents: { imageUrl: string; title: string; description: string; link: string; }[] = [];

  constructor(private cardDataService: CardDataService) {}

  ngOnInit() {
    // Récupère les événements à venir et passés
    this.upcomingEvents = this.cardDataService.getUpcomingEvents();
    this.pastEvents = this.cardDataService.getPastEvents();
  }
}
