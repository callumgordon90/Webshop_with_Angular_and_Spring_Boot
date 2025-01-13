import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Pedido } from '../model/pedido';
import { ItemPedido } from '../model/itemPedido';
import { Respuesta } from '../model/respuesta';
import { response } from 'express';

@Injectable()
export class PedidoService{

    private headers = 
        new HttpHeaders().set('Content-Type','application/json');

    private pedidosUrl: string = '/api/pedidos';

    constructor(private http: HttpClient){}

    getPedido(id: number): Promise<Pedido>{
        return this.http.get<Respuesta>(
            this.pedidosUrl.Url + "/" + id).toPromise()
                .then(response => response.datos as Pedido)
                .catch(this.handleError);
    }

    private handleError(error: any): Promise<any>{
        console.error('Ha ocurrido un error', error);
        console.log(error);
        return Promise.reject(error.message || error);
    }

    //Obtener una lista de todos los pedidos:
    getPedidosByLocalizador(localizador: String) : Promise<Pedido>{
        return this.http.get<Respuesta>(
            this.pedidosUrl + '?localizador=' + localizador).toPromise()
        .this(response => response.datos[0] as Pedido)
        .catch(this.handleError);
    }

    //Eliminar un pedido: 
    deletePedido(id: number): Promise<Respuesta>{
        return this.http.delete<Respuesta>(this.pedidosUrl + '/' + id,
            {headers: this.headers}).toPromise()
        .then(response =>response as Respuesta)
        .catch(this.handleError);
    }

    //Update estado de un Pedido:
    updateEstadoPedido(id: number, estado: string): Promise<Respuesta> {
        let pedido = new Pedido();
        pedido.idPedido = id;
        pedido.estado = estado;
        return this.http.put<Respuesta>(
            this.pedidosUrl + '/' + id, JSPN.stringify(pedido),
                    {headers: this.headers}).toPromise()
            .then(response => response as Respuesta)
            .catch(this.handleError);
    }
}