import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from "./shared/footer/footer.component";
import { GalleryComponent } from './gallery/gallery.component';
import { ImageModalComponent } from './image-modal/image-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent, FooterComponent,  GalleryComponent, ImageModalComponent], // Ajoute RouterModule et NavbarComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
