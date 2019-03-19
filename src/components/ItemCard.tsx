import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddCartIcon from '@material-ui/icons/AddShoppingCart';
import * as React from 'react';
import itemStore from '../stores/ItemStore';

interface IItemCardProps {
  itemId: number,
  itemName: string,
  itemDescription: string,
  itemPrice: number
}

export default class ItemCard extends React.Component<IItemCardProps, {}>{ 
  public handleCartClick = () => {
    itemStore.addToCart({id: this.props.itemId, 
      itemDescription: this.props.itemDescription, 
      itemName: this.props.itemName,
      price: this.props.itemPrice
    });
  }

  public render(){
    return(
      <Card className="card" style={{width: 400}}>
          <CardMedia
            component="img"
            className="cardmedia"
            style={{width: 250, height: 150}}
            image={`/assets/items/${this.props.itemId}.jpg`}
            title="Food Item"
          />
          <CardContent>
            <Typography gutterBottom={true} variant="h5" component="h2">
              ({this.props.itemId}) {this.props.itemName} | {this.props.itemPrice},-
            </Typography>
            <Typography component="p">
              {this.props.itemDescription}
            </Typography>
          </CardContent>
        <CardActions>
        <IconButton
          className="addcartbutton"
          onClick={this.handleCartClick}>
          <AddCartIcon />
        </IconButton>
        </CardActions>
      </Card>
    );
  }
}
