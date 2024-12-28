import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../model/categoria'; 
import { Respuesta } from '../model/respuesta';

//import { CATEGORIAS } from './mock-categories';

@Injectable()

export class CategoriaService {
    /*
    getCategorias(): Promise<Categoria[]> {
        return Promise.resolve(CATEGORIAS);
    }
    */
    
    private categoriasUrl: string = '/api/categorias';

    constructor(private http: HttpClient) {}

    /*
    getCategorias(): Promise<Categoria[]>{
        return new Promise(resolve => {
            //Simulate the latency of a server with a 2 second delay
                setTimeout(()=> resolve(CATEGORIAS),2000);
        });
    }
        */
    getCategorias():Promise<Categoria[]>{
        return this.http.get<Respuesta>(this.categoriasUrl).toPromise().then(
            response => response.datos as Categoria[]
        ).catch(this.handleError);
    }

    private handleError(error: any):Promise<any>{
        console.error('Ha Ocurrido un error', error);
        return Promise.reject(error.message || error);
    }
}