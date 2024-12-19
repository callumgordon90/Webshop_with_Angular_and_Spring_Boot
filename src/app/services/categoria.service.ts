import {Injectable} from '@angular/core';

import { Categoria } from '../model/categoria'; 
import { CATEGORIAS } from './mock-categories';

@Injectable()

export class CategoriaService {
    getCategories(): Categoria[] {
        return CATEGORIAS;
    }
}