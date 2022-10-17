import React from 'react';
import { App } from './App'
import Navigation from './components/navigation'
import { AnimationStore } from './stores/animationStore';
import AppMenu from './components/appMenu'
import AppSetting from './components/appSetting';
import AppGuide from './components/appGuide';
import { MouseEventStore } from './stores/mouseEventStore';
import { render } from "react-dom"
import GridStore from './stores/gridStore';
import GridView from './components/gridView';
import ProgressBar from 'react-bootstrap/esm/ProgressBar';
import { WindowSizeStore } from './stores/windowSizeStore';
import './index.css';

const mouseEvents = new MouseEventStore();
const grid = new GridStore(99, 48);
const animation = new AnimationStore(48, 99);

render(
    <div>
        <Navigation />
        <AppGuide />
        <AppSetting grid={grid} animation={animation} />
        <GridView grid={grid} mouseEvents={mouseEvents} />
        <AppMenu grid={grid} animation={animation} />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous" />
    </div>



    , document.getElementById("root"));
