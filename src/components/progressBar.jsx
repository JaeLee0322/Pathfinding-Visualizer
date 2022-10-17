import { observer } from 'mobx-react-lite';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../inedx.css';

const ProgressBar = observer(() => {
    return (
        <ProgressBar className='progress-bar' now={40}>AAAAAA</ProgressBar>
    )
})

export default ProgressBar