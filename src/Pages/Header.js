import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)
    const handelLogOut = () => {
        signOut(auth)
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">To do App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto flex justify-center items-center">
                        <Link className='text-decoration-none mx-3 text-white' to='/'>Home</Link>
                        {user && <Link className='text-decoration-none mx-3 text-white' to='/seeToDo'>See To Do</Link>}
                        {user ? <button className='bg-transparent p-0 text-light' onClick={handelLogOut}>Sign out</button> : <Link className='text-decoration-none mx-3 text-white ' to='/login'>Login</Link>}
                    </Nav>
                    <Nav>=
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;