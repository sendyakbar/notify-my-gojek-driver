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
                <button
                    className="button"
                    onClick={ this.onClick }
                    style={{ backgroundColor: this.props.color }}
                >
                    { this.props.label }
                </button>
            </div>
        );
    }
}
 
export default Button;