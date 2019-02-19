import React, { Component } from 'react';

// style
import './modal.css';

// components
import Button from '../../components/button/button.jsx';
import TextArea from '../../components/textArea/textArea.jsx';

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
                    <p> { this.props.title } { this.props.name }</p>
                    <TextArea
                        placeholder="Message"
                        onChange={ this.messageInput }
                        value={ this.state.message }
                    />
                    <div className="buttonContainer">
                        <Button
                            className="button"
                            label="Send"
                            color="#7BC415"
                            action={ this.onSubmit }
                        />
                        <Button
                            label="Cancel"
                            color="#DC6969"
                            action={ this.closeModal }
                        />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Modal;