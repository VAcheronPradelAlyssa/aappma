import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule], // Nécessaire pour utiliser routerLink
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  // Définir le chemin de l'image
  cheminImage: string = 'assets/images/logo.jpg';
}