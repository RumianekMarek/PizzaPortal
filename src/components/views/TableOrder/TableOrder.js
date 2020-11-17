import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

class TableOrder extends React.Component {
  render(){
    console.log(this.props.match.params.id);

    if (this.props.match.params.id == ':id') {
      return(
        <Container maxWidth='xs'>
          <h1> Table Order</h1>
          <div>
            <Button variant='contained' color='secondary' href='/ordering/order/Table1'>Table 1</Button>
            <Button variant='contained' color='secondary' href='/ordering/order/Table2'>Table 2</Button>
            <Button variant='contained' color='secondary' href='/ordering/order/Table3'>Table 3</Button>
          </div>
          <div>
            <Button variant='contained' color='secondary' href='/ordering/order/Table4'>Table 4</Button>
            <Button variant='contained' color='secondary' href='/ordering/order/Table5'>Table 5</Button>
            <Button variant='contained' color='secondary' href='/ordering/order/Table6'>Table 6</Button>
          </div>
        </Container>
      );
    } else return (
      <Container maxWidth='xs'>
        <h1>Table Order</h1>
        <h3>{this.props.match.params.id}</h3>
      </Container>
    );
  }
}

TableOrder.propTypes = {
  match: PropTypes.any,
  id: PropTypes.string,
};

export default TableOrder;
