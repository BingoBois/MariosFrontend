import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { observer } from 'mobx-react';
import * as React from 'react';
import { sendOrder } from '../api/PizzaApi';
import itemStore from '../stores/ItemStore';
import CartItem from './CartItem';

@observer
export default class Cart extends React.Component{ 
  public state = {
    name: "",
    phoneNumber: ""
  }

  public handleCheckoutClick = async () => {
    if(itemStore.cartList.length === 0 || !this.state.name || !this.state.phoneNumber){
      alert('Please fill out the fields, and don\'t have an empty cart!');
    }
    else{
      const response = await sendOrder(this.state.name, this.state.phoneNumber, itemStore.cartList);
      alert(response);
    }
  }

  public nameHandleChange = (event: any) => {
    this.setState({name: event.target.value });
  };

  public phoneNumberHandleChange = (event: any) => {
    this.setState({phoneNumber: event.target.value });
  };

  public render(){
    const foodItems = itemStore.cartList.map((item, index) => {
      return (<CartItem key={index} index={index} itemId={item.id} itemName={item.itemName} itemPrice={item.price} />);
    });

    return(
      <Card className="cartcard" style={{width: 400}}>
        <CardContent>
          <Typography gutterBottom={true} variant="h5" component="h2">
            Personal Information:
            <TextField
              id="standard-name"
              label="Name"
              className="nameTextBox"
              value={this.state.name}
              onChange={this.nameHandleChange}
              margin="normal"
            />
            <TextField
              id="standard-name"
              label="Phone Number"
              className="phoneNumberTextBox"
              value={this.state.phoneNumber}
              onChange={this.phoneNumberHandleChange}
              margin="normal"
            />
          </Typography>
          <Typography gutterBottom={true} variant="h5" component="h2">
            Cart Content:
          </Typography>
          <div className="cartitems">
            {foodItems}
          </div>
        </CardContent>
        <CardActions>
        <Button size="small" onClick={this.handleCheckoutClick}>Check Out</Button>
        </CardActions>
      </Card>
    );
  }
}
