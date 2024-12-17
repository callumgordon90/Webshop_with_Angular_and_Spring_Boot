import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from "@angular/forms";
import { MenuComponent } from "./menu/menu.component";
import { FooterComponent } from "./footer/footer.component";
import { PortadaComponent } from "./portada/portada.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
            FormsModule,
            HeaderComponent,
            MenuComponent,
            FooterComponent,
            PortadaComponent,
            RouterOutlet,
            CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webShopUI';
}
