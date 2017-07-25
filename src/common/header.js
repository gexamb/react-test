import React, { Component } from 'react';
import config from 'webpack-config-loader!../config.js';
import { connect } from 'react-redux';
import { setError, clearError } from '../actions/index';
import { ASSETPATH } from './assets';
import { logout } from '../actions/login';
import * as selectors from '../selectors';
import { Nav, Row, Breadcrumb, Button, InputGroup, FormGroup, FormControl, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {q:''};
    }

    componentWillMount() {
        const { setError, clearError } = this.props;
    }

    componentWillReceiveProps() {

    }

    componentWillUpdate() {
        
    }

    componentDidUpdate() {
        
    }

    componentWillUnmount() {
        
    }

    onSearchPress(evt) {
        if (evt.key === 'Enter') {
            this.doSearch();
        }
    }

    doSearch() {
        if(!_.isEmpty(this.state.q)) {
            console.info("do search", this.state.q);
        }
    }

    onQchange(evt) {
        this.setState({q:evt.target.value});
    }

    render() {
        const { q } = this.state;
        return (
            <div id="header">
                <Navbar fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Unitracker</a>
                            <span className="separator"> | </span>
                            <span className="tagline">we make movies</span>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight>
                        <Navbar.Form pullLeft>
                            <FormGroup>
                                <InputGroup>
                                    <FormControl type="text" placeholder="Search" value={q} onChange={::this.onQchange} onKeyPress={::this.onSearchPress} />
                                    <InputGroup.Addon onClick={::this.doSearch}>
                                        <span className="fa fa-search">
                                            <span className="sr-only">Search</span>
                                        </span>
                                    </InputGroup.Addon>
                                </InputGroup>
                            </FormGroup>
                        </Navbar.Form>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default connect(null, { setError, clearError, logout })(Header);
