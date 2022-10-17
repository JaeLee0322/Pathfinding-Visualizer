import React from 'react'
import { observer } from "mobx-react-lite";
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Form from 'react-bootstrap/Form' 

const AppMenu = observer(({ grid, animation }) => {
    return (
        <Navbar className='app-menu'>
            <Container>
                <Button onClick={() => {animation.getShortestPath(grid)}}>Visualize</Button>
                <ButtonGroup>
                    <Button onClick={() => {grid.setDrawingMode(1)}}>Pencil</Button>
                    <Button onClick={() => {grid.setDrawingMode(0)}}>Eraser</Button>
                    <Button onClick={() => {grid.setDrawingMode(2)}}>Start Node</Button>
                    <Button onClick={() => {grid.setDrawingMode(3)}}>Target Node</Button>
                </ButtonGroup>
                <Button variant="danger" onClick={() => {grid.clearGrid()}}>Clear</Button>
                <Button variant="danger" onClick={() => {animation.setPause()}}>Pause</Button>
            </Container>
        </Navbar>
    )
})

export default AppMenu