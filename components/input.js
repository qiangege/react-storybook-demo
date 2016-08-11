import React, { PropTypes, Component } from 'react'
import Range from 'range-input-react';
// Optional css for the material style
import 'range-input-react/style.css';

class Input extends Component {
    // constructor(props) {
    //     super(props, context)

    // }
    
    handleOnChange() {
        console.log('OnChange');
    }
    
    handleOnClick() {
        console.log('OnClick');
    }
    
    handleKeyDown() {
        console.log('KeyDffffown');
    }
    
    handleOnMouseMove() {
        console.log('OnMouseMove');
    }
    
    render() {
        return (
            <Range
                className='material' // Optional style
                onChange={this.handleOnChange}
                onClick={this.handleOnClick}
                onKeyDown={this.handleKeyDown}
                onMouseMove={this.handleOnMouseMove}
                value={20}
                min={0}
                max={100} />
        )

    }
}
export default Input;