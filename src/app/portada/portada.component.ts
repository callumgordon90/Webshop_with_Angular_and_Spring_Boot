import { Component } from "@angular/core";
@Component({
    selector: 'app-portada',
    standalone: true,
    templateUrl: './portada.component.html',
    styleUrls: ['./portada.component.css']
})
export class PortadaComponent {
    titulo = 'Bienvenido a Web-Shop';
}