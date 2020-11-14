import React from 'react';
import PropTypes from 'prop-types';

class TableOrder extends React.Component {
  render(){
    return (
      <div>
        <h2>TableOrder</h2>
        <h3>{this.props.match.params.id}</h3>
      </div>
    );
  }
}

TableOrder.propTypes = {
  match: PropTypes.node,
  id: PropTypes.string,
};

export default TableOrder;
