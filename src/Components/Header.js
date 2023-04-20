import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Box } from '@chakra-ui/react';
import { useColorMode, Button } from '@chakra-ui/react';
import { MdLightMode } from 'react-icons/md';
import { MdDarkMode } from 'react-icons/md'

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <div>

            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home" >
                        <Box _dark={{ color: 'white' }}><h1>Converter</h1> </Box>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light' />

                    <Navbar.Collapse id="basic-navbar-nav" _dark={{ color: 'white' }}>
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link href="#home">  <Box _dark={{ color: 'white' }}>Home </Box></Nav.Link>
                            <Nav.Link href="#home"><Box _dark={{ color: 'white' }}>About </Box></Nav.Link>
                            <Nav.Link >
                                <Box _dark={{ color: 'white' }}>
                                    <Button onClick={toggleColorMode}>
                                        {colorMode === 'light' ? <MdLightMode /> : <MdDarkMode />}
                                    </Button>
                                </Box>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header
