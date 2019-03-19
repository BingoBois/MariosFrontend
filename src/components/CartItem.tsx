import IconButton from '@material-ui/core/IconButton';
import RemoveCartIcon from '@material-ui/icons/RemoveShoppingCart';
import { observer } from 'mobx-react';
import * as React from 'react';
import itemStore from '../stores/ItemStore';

interface ICartItemProps {
  itemId: number
  itemName: string,
  itemPrice: number,
  index: number
}

@observer
export default class CartItem extends React.Component<ICartItemProps, {}>{ 
  public removeClick = () => {
    itemStore.deleteFromCart(this.props.index);
  }

  public render(){
    return(
      <div>
        <span>({this.props.itemId}) {this.props.itemName}: {this.props.itemPrice},-</span>
        <IconButton
          className="addcartbutton"
          onClick={this.removeClick}>
          <RemoveCartIcon />
        </IconButton>
      </div>
    );
  }
}
