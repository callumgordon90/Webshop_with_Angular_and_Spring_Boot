import { ItemCesta } from "./itemCesta"; 
export class Cesta {
    localizador! : string;
    estado! : string;
    items! : ItemCesta[];
    fecha! : Date;
    totalUnidades! : number;
    totalPrecio! : number;
}