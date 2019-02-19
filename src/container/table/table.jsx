import React, { Component } from 'react';

// style
import './table.css';

// redux
import { connect } from 'react-redux';

// action
import driversList from '../../action/fetchDriver';

// components
import Modal from '../modal/modal.jsx';
import Button from '../../components/button/button.jsx';

class Table extends Component {
    state = {
        driverName: '',
        modalTitle: ''
    }
    componentDidMount() {
        this.props.driversList();
    };

    openModal = (title, name) => {
        this.setState({
            modalTitle: title,
            driverName: name
        })
        const modal = document.getElementById('myModal')
        modal.style.display = 'block'
    };

    render() {
        return (
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Suspended</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.allDrivers
                            .filter(datum => RegExp(this.props.searchText, 'gi')
                            .test(datum.name))
                            .map((datum, index) => (
                                <tr key={index}>
                                    <td>{datum.id}</td>
                                    <td className="driverName">{ datum.name }</td>
                                    <td className="driverPhone">{ datum.phone }</td>
                                    <td className="driverEmail">{ datum.email }</td>
                                    <td>{ datum.suspended === 0 ? 'NO' : 'YES' }</td>
                                    <td>
                                        { datum.suspended === 0 
                                            ? <Button 
                                                label="Notify"
                                                color="grey"
                                                action={ () => this.openModal("Notify", datum.name) }
                                              /> 
                                                : null
                                        }
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <Modal 
                    title={ this.state.modalTitle }
                    name={ this.state.driverName }
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        allDrivers: state.List.driverList,
        searchText: state.Search.search
    }
)
const mapDispatchToProps = (dispatch) => (
    {
        driversList: () => dispatch(driversList())
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Table);