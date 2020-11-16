import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


class BookedEvent extends React.Component {
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
    
    const Event = {
      data: '23/03/2021',
      People: '12',
      Appetizers: 'Chipps, Crackers, SaltySticks',
      MainDish: 'Fries*4, MiniSadwich*4, ChickenStrips*4',
      Beverages: 'Coca-cola*mix, Water, Juice*mix',
      Alkohol: 'Seperate Bill',
    };
    return (
      <Container component='main' maxWidth="xs">
        <h2>BookedEvent</h2>
        <h3>{this.props.match.params.id}</h3>
        <Grid container>
          <Grid item xs>
            <Paper className={classes.paper}>
              {JSON.stringify(Event)}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

BookedEvent.propTypes = {
  match: PropTypes.any,
  id: PropTypes.string,
};

export default BookedEvent;
