import React, { Component } from 'react';
import * as actions from '../actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
    constructor (props) {
        super(props);

        this.state = {
            searchTerm: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderNavItems = this.renderNavItems.bind(this);
        this.signIn = this.signIn.bind(this);
        this.signOut = this.signOut.bind(this);
    }

    handleInputChange (value) {
        this.setState({
            searchTerm: value
        });
    }

    handleSubmit (event) {
        event.preventDefault();

        this.props.search(this.state.searchTerm);

        this.setState({
            searchTerm: ''
        });
    }

    signIn () {
        this.props.signIn();
    }

    signOut () {
        this.props.signOut();
    }

    renderNavItems () {
        if (this.props.authenticated) {
            return (
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <button onClick={this.signOut} className="btn btn-link sign-out">Sign Out</button>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <button onClick={this.signIn} className="btn btn-link sign-in">Sign In</button>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-link sign-up">Sign Up</button>
                    </li>
                </ul>
            );
        }
    }

    render () {
        return (
            <div>
                <header>
                    <div className="row">
                        <div className="col-xs-4">
                            <Link to="/" className="logo">Rec-Rec</Link> 
                        </div>
                        <div className="col-xs-4">
                            <form className="form-group" onSubmit={this.handleSubmit}>
                                <label className="search-bar">Search for recipes</label>
                                <input value={this.state.searchTerm} onChange={ (event) => {this.handleInputChange(event.target.value)}} className="form-control search-bar" type="text" />
                            </form>
                        </div>
                        <div className="col-xs-4 pull-right">
                            <nav className="navbar-collapse">
                                    {this.renderNavItems()}
                            </nav>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        authenticated: state.authenticated
    };
}

export default connect(mapStateToProps, actions)(Header);