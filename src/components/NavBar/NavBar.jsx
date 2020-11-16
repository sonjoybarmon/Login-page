import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar expand="lg">
            <div className='container
            '>
                <Navbar.Brand style={{float:'left'}}> 
                    <h1>Sree</h1> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse style={{width:'900px',float:'right'}} id="basic-navbar-nav">
                    <Nav  className="ml-auto">
                        <li className="">
                            <NavLink activeClassName='text-primary'
                                to='/home' className='mr-4'>Home</NavLink>
                        </li>
                        <li className="">
                            <NavLink activeClassName='text-primary'
                                to='/portfolio' className='mr-4'>Our Portfolio</NavLink>
                        </li>
                        <li className="">
                            <NavLink activeClassName='text-primary'
                                to='/team' className='mr-4'>Our Team</NavLink>
                        </li>
                        <li className="">
                            <NavLink activeClassName='text-primary'
                                to='/login' className='mr-4'>Log in</NavLink>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default NavBar;