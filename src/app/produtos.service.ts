import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
//acesso direto alista de produtos
produtos: IProduto[] = produtos;

  constructor() { }
  
  getAll(){
    // retorna lista de produtos
    return this.produtos;
  }
  getOne(produtoId: number){
    //retorna o produto "id"
    return this.produtos.find(produto => produto.id === produtoId);

  }
}
