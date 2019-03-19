import Grid from '@material-ui/core/Grid';
import { observer } from 'mobx-react';
import * as React from 'react';
import { retrieveItemList } from './api/PizzaApi';
import Cart from './components/Cart';
import ItemList from './components/ItemList';
import itemStore from './stores/ItemStore';

@observer
class App extends React.Component {
  public async componentWillMount(){
    const fetchedItems = await retrieveItemList();
    fetchedItems.forEach((e) => {
      itemStore.addToProductList(e);
    });
  }

  public render() {
    return (
      <div className="App">
        <Grid container={true} spacing={8}>
          <Grid item={true} md={6} xs={12}>
            <img src="/assets/merio.png" height="100" width="300"/>
            <ItemList />
          </Grid>
          <Grid item={true} md={6} xs={12}>
            <img src="/assets/cart.jpg" height="100" width="300"/>
            <Cart />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
