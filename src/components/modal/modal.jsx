import React, { Component } from 'react';

// style
import './modal.css'

class Modal extends Component {
    closeModal = () => {
        const modal = document.getElementById('myModal')
        modal.style.display = 'none'
    }
    render() { 
        return (
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={this.closeModal}>&times;</span>
                    <p>Some text in the Modal..</p>
                </div>
            </div>
        );
    }
}
 
export default Modal;