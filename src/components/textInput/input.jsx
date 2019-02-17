import React, { Component } from 'react';

// style
import './input.css';

class Input extends Component {
    inputChange = (e) => {
        this.props.onChange(e.target.value)
    }
    render() {
        return (
            <div>
                <form onSubmit={(e) => { e.preventDefault() }}>
                    <input
                        type="text"
                        placeholder={this.props.placeholder}
                        onChange={this.inputChange}
                        value={this.props.value}
                    />
                </form>
            </div>
        );
    }
}
 
export default Input;