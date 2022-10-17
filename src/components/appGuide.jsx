import React from 'react'
import { observer } from "mobx-react-lite";
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

const AppGuide = observer(() => {
    const style = {
        border: '2px solid lightgrey',
        height: 'calc((1 / 60) * 100vh)',
    };

    return (
        <Navbar className='app-guide'>
            <Container>
                <Navbar.Text><div className='node-start' style={style}/> Start Node</Navbar.Text>
                <Navbar.Text><div className='node-end' style={style}/> Target Node</Navbar.Text>
                <Navbar.Text><div className='node' style={style}/> Unvisited Node</Navbar.Text>
                <Navbar.Text><div className='node-visited' style={style}/> Visited Node</Navbar.Text>
                <Navbar.Text><div className='node-shortest-path' style={style}/> Shortest-path Node</Navbar.Text>
                <Navbar.Text><div className='node-wall' style={style}/> Wall Node</Navbar.Text>
            </Container>
        </Navbar>
    )
})

export default AppGuide