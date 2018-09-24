import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Color extends Component {

  static propTypes = {
    onSelect: PropTypes.func,
    selectColor: PropTypes.func,
    color: PropTypes.string
  };

  handleClick = () => {
    console.log('here');
    const { color, onSelect, selectColor } = this.props;
    selectColor(color);
    console.log('color', color);
  };
  
  render() { 
    const { color } = this.props;

    return (
      <li>
        <span onClick={this.handleClick}>{color}</span>
      </li>
    );
  }
}
 
export default Color;