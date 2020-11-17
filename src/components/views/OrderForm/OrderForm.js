import React from 'react';
import Tables from '../Tables/Tables';
import Form from './Form';
//import Container from '@material-ui/core/Container';
//import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';

class OrderForm extends React.Component {
  render(){
    console.log(this);
    return (
      <Tables />,
      <Form />
      
    );
  }
}

export default OrderForm;