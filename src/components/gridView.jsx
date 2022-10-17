import { observer } from "mobx-react-lite"
import '../stores/gridStore'
import SquareView from "./squareView"
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import '../index.css'

const GridView = observer(({ grid, mouseEvents }) => (
    <div className="app-grid">
        <ButtonGroup vertical>
            {grid.squares.map(row => (
                <ButtonGroup>
                    {row.map(node => (
                        <SquareView node={node} grid={grid} gridFunction={grid.changeGrid} mouseEvents={mouseEvents}/>
                    ))}
                </ButtonGroup>
            ))}
        </ButtonGroup> 
    </div>
))

export default GridView