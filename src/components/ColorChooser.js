import React, { Component, Fragment } from 'react';
import Color from './Color';
import AddColor from './AddColor';

class ColorChooser extends Component {
  
  render() { 
    return (
      <Fragment>
        <h2>ColorChooser</h2>
        <Color/>
        <AddColor/>
      </Fragment>
    );
  }
}
 
export default ColorChooser;