import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class Tables extends React.Component {
  render(){
    const classes = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      avatar: {
        margin: 0 ,
      },
    }));
    
    return (
      <Container component='main' maxWidth="xs">
        <h1>Tables</h1>
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Paper className={classes.paper}><h3>Table 1</h3>Order:</Paper>
              <Button variant='contained' color='primary' href='/ordering/new' >Create Order</Button>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}><h3>Table 2</h3>Order:</Paper>
              <Button variant='contained' color='primary' href='/ordering/new' >Create Order</Button>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}><h3>Table 3</h3>Order:</Paper>
              <Button variant='contained' color='primary' href='/ordering/new' >Create Order</Button>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Paper className={classes.paper}><h3>Table 4</h3>Order:</Paper>
              <Button variant='contained' color='primary' href='/ordering/new' >Create Order</Button>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}><h3>Table 5</h3>Order:</Paper>
              <Button variant='contained' color='primary' href='/ordering/new' >Create Order</Button>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}><h3>Table 6</h3>Order:</Paper>
              <Button variant='contained' color='primary' href='/ordering/new' >Create Order</Button>
            </Grid>
          </Grid>
        </div>  
      </Container>
    );
  }
}

export default Tables;
