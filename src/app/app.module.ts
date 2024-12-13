import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
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