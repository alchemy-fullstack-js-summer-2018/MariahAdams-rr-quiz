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
    loadColors: PropTypes.func,
    onSelect: PropTypes.func,
    addColor: PropTypes.func
  };
  
  componentDidMount() {
    const green = {
      name: 'green'
    };
    this.props.loadColors([green, 'blue', 'purple']);
  }
  
  render() { 
    const { colors, onSelect, addColor } = this.props;

    return (
      <Fragment>
        <h2>ColorChooser</h2>

        <ul>
          {colors.map(selectedColor => {
            return <Color key={selectedColor} selectedColor={selectedColor} onSelect={onSelect}/>;
          })}
        </ul>

        <AddColor addColor={addColor}/>

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