import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class Tables extends React.Component {
  render(){
    const classes = 'styl';
    return (
      <Container component='main' maxWidth="xs">
        <h1>Tables</h1>
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Paper className={classes.paper}><h3>Table 1</h3>Order:</Paper>
              <Button variant='contained' color='primary' href='/ordering/new' >Create</Button>
              <Button variant='contained' color='secondary' href='/ordering/order/Table1'>Details</Button>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}><h3>Table 2</h3>Order:</Paper>
              <Button variant='contained' color='primary' href='/ordering/new' >Create</Button>
              <Button variant='contained' color='secondary'href='/ordering/order/Table2'>Details</Button>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}><h3>Table 3</h3>Order:</Paper>
              <Button variant='contained' color='primary' href='/ordering/new' >Create</Button>
              <Button variant='contained' color='secondary'href='/ordering/order/Table3'>Details</Button>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Paper className={classes.paper}><h3>Table 4</h3>Order:</Paper>
              <Button variant='contained' color='primary' href='/ordering/new' >Create</Button>
              <Button variant='contained' color='secondary'href='/ordering/order/Table4'>Details</Button>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}><h3>Table 5</h3>Order:</Paper>
              <Button variant='contained' color='primary' href='/ordering/new' >Create</Button>
              <Button variant='contained' color='secondary'href='/ordering/order/Table5'>Details</Button>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}><h3>Table 6</h3>Order:</Paper>
              <Button variant='contained' color='primary' href='/ordering/new' >Create</Button>
              <Button variant='contained' color='secondary'href='/ordering/order/Table6'>Details</Button>
            </Grid>
          </Grid>
        </div>  
      </Container>
    );
  }
}

export default Tables;
