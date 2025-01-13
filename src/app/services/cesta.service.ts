import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient } from '@angular/common/http';

import { Cesta } from '../model/cesta';
import { ItemCesta } from '../model/itemCesta';
import { Respuesta } from '../model/respuesta';
import { Pedido } from '../model/pedido';

@Injectable()
export class CestaService {
    private headers = new HttpHeaders().set('Content-Type','application/json');

    private cestaUrl: string = '/api/cesta';

    constructor(private http: HttpClient){}

    crearCesta(): Promise<Cesta>{
        return this.http.post<Respuesta>(this.cestaUrl, {}).toPromise()
            .then(response => response.datos as Cesta)
            .catch(this.handleError);
    }

    private handleError(error: any):Promise<any>{
        console.error('Ha ocurrido un error',error);
        console.log(error);
        return Promise.reject(error.message || error);
    }

}