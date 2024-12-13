import { Component } from "@angular/core";
@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    titulo:string = 'Web-Shop';
    btnCestaOnClick(){

    }
}