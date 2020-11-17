import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';

class BookedTable extends React.Component {
  render(){
    return (
      <Container maxWidth='xs'>
        <h2>BookedTable</h2>
        <h3>{this.props.match.params.id}</h3>
      </Container>
    );
  }
}

BookedTable.propTypes = {
  match: PropTypes.any,
  id: PropTypes.string,
};

export default BookedTable;
