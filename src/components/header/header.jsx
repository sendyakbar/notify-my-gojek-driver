import React, { Component } from 'react';

// style
import './header.css'

class Header extends Component {
    state = {  }
    render() {
        return (
            <header className="App-header">
                <img src={'https://imgee.s3.amazonaws.com/imgee/638b26370a794db38dfef92fa2bfe60f.png'} className="App-logo" alt="logo" />
            </header>
        );
    }
}

export default Header;