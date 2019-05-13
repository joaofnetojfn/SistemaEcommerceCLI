import { Editora } from './../editoras/editora';
import { Categoria } from './../categorias/categoria';

export class Filme {
    codigo: number;
    titulo: String;
    autor: String;
    categoria: Categoria;//  Tipo dela é um Objeto Categoria
    editora: Editora;// Tipo dela é um objeto Editora
}
