import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Categoria } from "../model/categoria";
import { Libro } from "../model/libro";
import { FormsModule } from "@angular/forms";
import { CategoriaService } from "../services/categoria.service";

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [FormsModule, CommonModule],// Import here
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'], 
    providers: [CategoriaService]
})
    export class MenuComponent implements OnInit{

        /*
        CATEGORIAS = [{'idCategoria': 1, 'nombreCategoria' : 'Informatica'},
            {'idCategoria': 2, 'nombreCategoria' : 'Novelas'},
            {'idCategoria' : 3, 'nombreCategoria' : 'Turismo'}];
            */
        categorias : Categoria[] = [];
        filtro : Libro = new Libro();
        mensaje : string = "";
        selectedCategoria : Categoria | undefined = undefined;
        constructor(private categoriaService: CategoriaService){};

        ngOnInit():void {
            this.getCategorias();
        }
        getCategorias(): void {
            this.categoriaService.getCategorias().then(
                categorias => this.categorias = categorias);
        }

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