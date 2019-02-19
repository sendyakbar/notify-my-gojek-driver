import React, { Component } from 'react';

// style
import './header.css';

// redux
import { connect } from 'react-redux';

// action
import search from '../../action/search';

// components
import Input from '../../components/textInput/input.jsx';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={'https://imgee.s3.amazonaws.com/imgee/638b26370a794db38dfef92fa2bfe60f.png'} className="App-logo" alt="logo" />
                <Input
                    placeholder="Type driver name..."
                    onChange={this.props.search}
                    value={this.props.searchText}
                />
            </header>
        );
    }
}

const mapStateToProps = (state) => (
    {
        state,
        searchText: state.Search.search
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        search: (input) => dispatch(search(input))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Header);