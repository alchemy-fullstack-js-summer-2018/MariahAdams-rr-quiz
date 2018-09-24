import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSelectedColor } from './reducers';

class RainbowLightBulb extends Component {

  state = {
    on: true
  };

  static propTypes = {
    selectedColor: PropTypes.string
  };

  handleClick = () => {
    this.setState(({ on }) => ({ on: !on }));
  };
  
  render() { 
    

    return (
      <section>
        <h2>RainbowLightBulb</h2>

        <button onClick={this.handleClick} style={{ backgroundColor: this.state.on ? 'green' : 'red' }}>
          {this.state.on ? 'ON' : 'OFF'}
        </button>
      </section>
    );
  }
}
 
export default connect(
  state => ({
    selectedColor: getSelectedColor(state)
  })
)(RainbowLightBulb);