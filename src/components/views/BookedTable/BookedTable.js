import React from 'react';
import PropTypes from 'prop-types';

class BookedTable extends React.Component {
  render(){
    return (
      <div>
        <h2>BookedTable</h2>
        <h3>{this.props.match.params.id}</h3>
      </div>
    );
  }
}

BookedTable.propTypes = {
  match: PropTypes.any,
  id: PropTypes.string,
};

export default BookedTable;
