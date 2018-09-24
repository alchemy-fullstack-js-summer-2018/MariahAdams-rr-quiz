import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Color extends Component {

  static propTypes = {
    color: PropTypes.string,
    onSelect: PropTypes.func,
    selectedColor: PropTypes.string
  };

  handleClick = () => {
    const { color, onSelect } = this.props;
    onSelect(color);
  };
  
  render() { 
    const { selectedColor } = this.props;

    return (
      <li>
        <span onClick={this.handleClick}>{selectedColor}</span>
      </li>
    );
  }
}
 
export default Color;