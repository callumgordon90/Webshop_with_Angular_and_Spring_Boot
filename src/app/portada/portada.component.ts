import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-portada',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './portada.component.html',
    styleUrls: ['./portada.component.css']
})
export class PortadaComponent {
    titulo = 'Bienvenido a Web-Shop';
}