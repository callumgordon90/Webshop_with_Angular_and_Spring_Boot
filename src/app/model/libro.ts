import { Categoria } from "./categoria";
export class Libro{
    idLibro! : number;
    idCategoria! : number;
    titulo! : string;
    isbn! : string;
    description!: string;
    autor!: string;
    categoria!: Categoria;
    precio!: number;
    foto! : string;
}