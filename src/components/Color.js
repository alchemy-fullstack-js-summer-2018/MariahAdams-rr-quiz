import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Color extends Component {

  static propTypes = {
    color: PropTypes.string,
    onSelect: PropTypes.func,
    selectColor: PropTypes.func,
    selectedColor: PropTypes.string
  };

  handleClick = () => {
    const { color, selectedColor, onSelect } = this.props;
    // onSelect(color);
    this.props.selectColor(color);
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