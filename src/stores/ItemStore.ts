import { action, observable } from 'mobx';
import Item from '../types/Item';

class ItemStore {
  @observable public cartList: Item[] = [];
  @observable public productList: Item[] = [];

  @action
  public addToCart(newItem: Item): void{
    this.cartList.push(newItem);
  }

  @action
  public deleteFromCart(index: number): void{
    this.cartList = this.cartList.filter((val, i) => {
      return (i !== index);
    });
  }

  @action 
  public addToProductList(newItem: Item): void{
    this.productList.push(newItem);
  }
}

const store = new ItemStore();
export default store;
