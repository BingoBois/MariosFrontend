import Button from '@material-ui/core/Button';
import * as React from "react";

export default class CustomButton extends React.Component{
  public render(){
    return(
      <Button variant="contained" color="primary" className="button">
        Primary
      </Button>
    );
  }
}
