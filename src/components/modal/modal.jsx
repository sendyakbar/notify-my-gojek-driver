import React, { Component } from 'react';

// style
import './modal.css'

// components
import Button from '../button/button.jsx'
import TextArea from '../textArea/textArea.jsx'

class Modal extends Component {
    state = {
        message: ''
    }
    messageInput = (input) => {
        this.setState({ message: input })
    }
    closeModal = () => {
        const modal = document.getElementById('myModal')
        modal.style.display = 'none'
    }
    onSubmit = () => {
        alert(`${this.props.title} ${this.props.name}: ${this.state.message}`)
        this.closeModal()
        this.setState({ message: '' })
    }
    render() {
        return (
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={this.closeModal}>&times;</span>
                    <p> { this.props.title } { this.props.name }</p>
                    <TextArea
                        placeholder="Message"
                        onChange={ this.messageInput }
                        value={ this.state.message }
                    />
                    <Button
                        label="Send"
                        action={ this.onSubmit }
                    />
                    <Button 
                        label="Cancel"
                        action={ this.closeModal }
                    />
                </div>
            </div>
        );
    }
}
 
export default Modal;