import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { observer } from 'mobx-react';
import * as React from 'react';
import { adminLogin, IFoodOrder, retrieveAdminList, retrieveItemList } from './api/PizzaApi';
import Cart from './components/Cart';
import ItemList from './components/ItemList';
import OrderRow from './components/OrderRow';
import itemStore from './stores/ItemStore';

const SUPER_SECRET_PASSWORD = "IAmAdmin";

interface IAppState {
    admin: string | undefined,
    adminList: IFoodOrder[],
    password: string,
    username: string
}

@observer
class App extends React.Component<{}, IAppState> {

    public state = {
        admin: "",
        adminList: [],
        password: "" || "123",
        username: ""
    }

  public async componentWillMount(){
    const fetchedItems = await retrieveItemList();
    fetchedItems.forEach((e) => {
      itemStore.addToProductList(e);
    });
  }

  public handleNameChange = (name: string) => {
    // tslint:disable-next-line:no-console
    console.log(name);
    if (name === SUPER_SECRET_PASSWORD) {
        this.setState({
            admin: "login"
        });
    }
  }

  public backFromLogin = () => {
    this.setState({
        admin: undefined
    })
  }

  public usernameHandleChange = (e: any) => {
    this.setState({
        username: e.target.value
    })
  }

  public passwordHandleChange = (e: any) => {
    this.setState({
        password: e.target.value
    })
  }

  public clickLogin = async () => {
    const result = await adminLogin(this.state.username, this.state.password);
    // tslint:disable-next-line:no-console
    this.setState({
        admin: result.token
    }, async () => {
        if (this.state.admin) {
            this.setState({
                adminList: await retrieveAdminList(this.state.admin)
            })
        }
    });
  }

  public render() {
    if (this.state.admin === "login") {
        return (
            <div>
                <button onClick={this.backFromLogin}>
                    Back
                </button>
                <TextField
                    id="standard-name"
                    label="Username"
                    className="usernameTextBox"
                    value={this.state.username}
                    onChange={this.usernameHandleChange}
                    margin="normal"
                    />
                <TextField
                    id="standard-name"
                    label="Password"
                    className="passwordTextBox"
                    value={this.state.password}
                    onChange={this.passwordHandleChange}
                    margin="normal"
                />
                <button className="adminLoginButton" onClick={this.clickLogin}>
                    Login
                </button>
            </div>
        )
    } else if (this.state.admin) {
        // @ts-ignore
        const mapped = this.state.adminList.map((item: IFoodOrder, index) => {
            return (
                <OrderRow key={index} foodOrder={item} />
            )
        });
        return (
            <div>
                <button onClick={this.backFromLogin}>
                    Back
                </button>
                {mapped}
            </div>
        )
    }
    return (
      <div className="App">
        <Grid container={true} spacing={8}>
          <Grid item={true} md={6} xs={12}>
            <img className='merio' src="/assets/merio.png" height="100" width="300"/>
            <ItemList />
          </Grid>
          <Grid item={true} md={6} xs={12}>
            <img src="/assets/cart.jpg" height="100" width="300"/>
            <Cart nameChangeCallback={this.handleNameChange} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
