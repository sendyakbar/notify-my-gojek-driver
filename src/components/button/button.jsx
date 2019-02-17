import React, { Component } from 'react';

// style
import './button.css'

class Button extends Component {
    onClick = () => {
        this.props.action()
    }
    render() { 
        return (
            <div>
                <button onClick={ this.onClick }>{ this.props.label }</button>
            </div>
        );
    }
}
 
export default Button;