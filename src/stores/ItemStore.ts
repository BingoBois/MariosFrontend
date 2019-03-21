import { action, observable } from 'mobx';
import Item from '../types/Item';

class ItemStore {
  @observable public cartList: Item[] = [];
  @observable public productList: Item[] = [{id: 1, itemDescription: "Sue", itemName: "Pizzaen", price: 85}, {id: 2, itemDescription: "Den go", itemName: "En goooo pizza", price: 40}];

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
