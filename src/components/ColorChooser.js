import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Color from './Color';
import AddColor from './AddColor';
import { getColors, getSelectedColor } from './reducers';
import { loadColors, addColor, selectColor } from './actions';

class ColorChooser extends Component {

  static propTypes = {
    colors: PropTypes.array,
    selectedColor: PropTypes.string,
    loadColors: PropTypes.func
  };

  componentDidMount() {
    this.props.loadColors(['green', 'blue', 'purple']);
  }
  
  render() { 
    const { selectedColor } = this.props;

    return (
      <Fragment>
        <h2>ColorChooser</h2>

        <Color
          selectedColor={selectedColor}
        />

        <AddColor
        
        />

      </Fragment>
    );
  }
}
 
export default connect(
  state => ({
    colors: getColors(state),
    selectedColor: getSelectedColor(state)
  }),
  { loadColors, selectColor, addColor }
)(ColorChooser);