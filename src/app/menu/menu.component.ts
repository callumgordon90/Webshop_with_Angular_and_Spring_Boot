import { Component } from "@angular/core";
import { Categoria } from "../model/categoria";
import { Libro } from "../model/libro";

@Component({
    selector: 'app-menu',
    standalone: true,
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
    export class MenuComponent {
        CATEGORIAS = [{'idCategoria': 1, 'nombreCategoria' : 'Informatica'},
            {'idCategoria': 2, 'nombreCategoria' : 'Novelas'},
            {'idCategoria' : 3, 'nombreCategoria' : 'Turismo'}];
        categories : Categoria[] = this.CATEGORIAS;
        filtro : Libro = new Libro();
        mensaje : string = "";
        selectedCategoria : Categoria | undefined = undefined;

        buscarOnClick() {
            if (this.filtro.titulo !== '' && this.filtro.titulo !== undefined){
                this.mensaje = "";
            }else{
                this.mensaje = "Introduzca el valor que desea buscar";
            }
        }

        categoriaOnClick(categoria: Categoria){
            this.selectedCategoria = categoria;
        }
    }