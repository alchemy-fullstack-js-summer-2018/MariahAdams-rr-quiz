import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Color extends Component {

  static propTypes = {
    onSelect: PropTypes.func,
    selectColor: PropTypes.func,
    selectedColor: PropTypes.string
  };

  handleClick = () => {
    console.log('here');
    const { selectedColor, onSelect } = this.props;
    onSelect(selectedColor);
    console.log('selectedColor', selectedColor);
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