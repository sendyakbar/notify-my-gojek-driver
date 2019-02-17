import React, { Component } from 'react';

// style
import './textArea.css'

class TextArea extends Component {
    inputChange = (e) => {
        this.props.onChange(e.target.value)
    }
    render() { 
        return (
            <div>
                <textarea
                    placeholder={ this.props.placeholder }
                    onChange={ this.inputChange }
                    value={ this.props.value }
                />
            </div>
        );
    }
}
 
export default TextArea; 