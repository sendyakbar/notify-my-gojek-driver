import React, { Component } from 'react';

// style
import './footer.css'

class Footer extends Component {
    state = {  }
    render() { 
        return (
            <footer className="App-footer">
                <div className="foot-note"><small>By sendyakbar &copy;{ new Date().getFullYear() }</small></div>
            </footer>
        );
    }
}
 
export default Footer;