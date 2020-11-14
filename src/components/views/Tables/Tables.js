import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

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
    }));
    
    return (
      <Container component='main' maxWidth="xs">
        <h1>Tables</h1>
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Paper className={classes.paper}><Avatar>T1</Avatar> <br/>Order:</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}><Avatar>T2</Avatar><br/>Order:</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}><Avatar>T3</Avatar><br/>Order:</Paper>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Paper className={classes.paper}><Avatar>T4</Avatar><br/>Order:</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}><Avatar>T5</Avatar><br/>Order:</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}><Avatar>T6</Avatar><br/>Order:</Paper>
            </Grid>
          </Grid>
        </div>  
      </Container>
    );
  }
}

export default Tables;
