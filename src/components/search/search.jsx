import React, { Component } from 'react';

// style
import './search.css'

// redux
import { connect } from 'react-redux'

// action
import search from '../../action/search'

class Search extends Component {
    state = {  }

    searchInput = (e) => {
        this.props.search(e.target.value)
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Search..."
                        onChange={this.searchInput}
                        value={this.props.searchText.search}
                    />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        state,
        searchText: state.Search
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        search: (input) => dispatch(search(input))
    }
)
 
export default connect(mapStateToProps, mapDispatchToProps)(Search);