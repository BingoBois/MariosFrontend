import * as React from 'react';
import { IFoodOrder } from 'src/api/PizzaApi';

export default class OrderRow extends React.Component<{foodOrder: IFoodOrder}, {}>{ 
 
  public render(){
      let total = 0;
      const mapped = this.props.foodOrder.order.map((item, index) => {
          total += item.price;
          return (
              <div key={`${this.props.foodOrder.name}:${index}`}>
                  <p>{item.itemName}: {item.price}</p>
              </div>
          )
      });
    return(
      <div>
          <p>{this.props.foodOrder.name}, phone: {this.props.foodOrder.phone}</p>
          {mapped}
          <p>Total: {total}</p>
      </div>
    );
  }
}
