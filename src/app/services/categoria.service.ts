import {Injectable} from '@angular/core';

import { Categoria } from '../model/categoria'; 
import { CATEGORIAS } from './mock-categories';

@Injectable()

export class CategoriaService {
    /*
    getCategorias(): Promise<Categoria[]> {
        return Promise.resolve(CATEGORIAS);
    }
    */

    getCategorias(): Promise<Categoria[]>{
        return new Promise(resolve => {
            //Simulate the latency of a server with a 2 second delay
                setTimeout(()=> resolve(CATEGORIAS),2000);
        });
    }
}