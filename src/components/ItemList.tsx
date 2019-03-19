import { observer } from 'mobx-react';
import * as React from 'react';
import itemStore from '../stores/ItemStore';
import ItemCard from './ItemCard';

@observer
export default class ItemList extends React.Component {
  public render() {
    const items = itemStore.productList.map((e) => {
      return (<ItemCard key={e.id} itemDescription={e.itemDescription} itemId={e.id} itemName={e.itemName} itemPrice={e.price} />);
    });
    return (
      <div>
        {items}
      </div>
    );
  }
}
