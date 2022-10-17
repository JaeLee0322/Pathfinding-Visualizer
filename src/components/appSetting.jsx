import React from 'react'
import { observer } from "mobx-react-lite";
import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'

const AppSetting = observer(({ grid, animation }) => {
    return (
        <Navbar className='app-setting'>
            <Container>
                <NavDropdown title={'Algorithm: ' + animation.currentAlgorithm} onSelect={algo => { animation.setAlgorithm(algo) }}>
                    <NavDropdown.Item>A* Search</NavDropdown.Item>
                    <NavDropdown.Item>Bidirectional Swarm Algorithm</NavDropdown.Item>
                    <NavDropdown.Item eventKey={"Breadth First Search"}>Breadth First Search</NavDropdown.Item>
                    <NavDropdown.Item>Convergent Swarm Algorithm</NavDropdown.Item>
                    <NavDropdown.Item eventKey={"Depth First Search"}>Depth First Search</NavDropdown.Item>
                    <NavDropdown.Item>Dijkstra</NavDropdown.Item>
                    <NavDropdown.Item>Greedy Best-first Search</NavDropdown.Item>
                    <NavDropdown.Item>Swarm Algorithm</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title='Mazes & Patterns' onSelect={() => { grid.changeMaze() }}>
                    <NavDropdown.Item eventKey={"Random"}>Basic Random Maze</NavDropdown.Item>
                    <NavDropdown.Item>Basic Weighted Maze</NavDropdown.Item>
                    <NavDropdown.Item>Recursive Division</NavDropdown.Item>
                    <NavDropdown.Item>Recursive Division (vertical skew)</NavDropdown.Item>
                    <NavDropdown.Item>Recursive Division (horizontal skew)</NavDropdown.Item>
                    <NavDropdown.Item>Simple Stair Pattern</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title={'Speed: ' + (animation.speedMulti * 1.5) + '%'} onSelect={multi => { animation.setAnimationDuration(multi) }}>
                    <NavDropdown.Item eventKey={2.0}>2.0</NavDropdown.Item>
                    <NavDropdown.Item eventKey={1.5}>1.5</NavDropdown.Item>
                    <NavDropdown.Item eventKey={1.0}>1.0</NavDropdown.Item>
                    <NavDropdown.Item eventKey={0.5}>0.5</NavDropdown.Item>
                </NavDropdown>
            </Container>
        </Navbar>
    )
})

export default AppSetting