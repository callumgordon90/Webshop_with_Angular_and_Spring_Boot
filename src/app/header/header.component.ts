import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    titulo:string = 'Web-Shop';
    btnCestaOnClick(){

    }
}