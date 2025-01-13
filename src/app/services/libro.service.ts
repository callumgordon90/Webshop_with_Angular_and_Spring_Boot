import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";

import { Libro } from '../model/libro';
import { Respuesta } from '../model/respuesta';

@Injectable()
export class LibroService {

    private headers = new HttpHeaders().set('Content-Type','application/json');

    private librosUrl: string = '/api/libros';

    constructor(private http: HttpClient){}

    getLibrosCategoria(idCategoria:number):Promise<Libro[]>{
        let filtro: Libro = new Libro();
        filtro.idCategoria = idCategoria;
        return this.http.post<Respuesta>(
            this.librosUrl + '/filtro', JSON.stringify(filtro),
                    {headers: this.headers}).toPromise()
            .then(response => response.datos as Libro[])
            .catch(this.handleError); 
    }

    getLibrosFiltro(valor : string): Promise<Libro[]>{
        return this.http.get<Respuesta>(
            this.librosUrl + '/tituloAutor?valor=' + valor).toPromise()
        .then(response => response.datos as Libro[])
        .catch(this.handleError);
    }

    getLibro(id:number): Promise<Libro> {
        return this.http.get<Respuesta>(this.librosUrl + '/' + id).toPromise()
            .then(response => response.datos as Libro)
            .catch(this.handleError);
    }

    private handleError(error: any):Promise<any> {
        console.error('Ha ocurrido un error', error);
        console.log(error);
        return Promise.reject(error.message || error);
    }
}