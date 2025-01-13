import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";

//Import components:
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { MenuComponent } from "./menu/menu.component";
import { FooterComponent } from "./footer/footer.component";
import { PortadaComponent } from "./portada/portada.component";

//Import services:
import { CategoriaService } from "./services/categoria.service";
import { LibroService } from "./services/libro.service";
import { CestaService } from "./services/cesta.service";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MenuComponent,
        FooterComponent,
        PortadaComponent
    ],
    imports: [
        BrowserModule,
        FormsModule, //<-- importa FormsModule antes de vincuar con [(ngModel)]
        HttpClient,
        HttpClientModule
    ],
    providers: [
                CategoriaService, LibroService, CestaService
            ],
    bootstrap: [AppComponent]
})
export class AppModule { }