import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { MenuComponent } from "./menu/menu.component";
import { FooterComponent } from "./footer/footer.component";
import { PortadaComponent } from "./portada/portada.component";

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
        FormsModule //<-- importa FormsModule antes de vincuar con [(ngModel)]
    ],
    providers: [
            ],
    bootstrap: [AppComponent]
})
export class AppModule { }