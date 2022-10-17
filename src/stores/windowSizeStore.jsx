import { makeAutoObservable, observable } from "mobx"

export class WindowSizeStore {
    windowDimensions = {
        width: window.innerWidth,
        height: window.innerHeight
    };

    constructor() {
        makeAutoObservable(this, { windowDimensions: observable.struct });
        window.onresize = () => {
            this.windowDimensions = getWindowDimensions()
        };
    }

    get currentDimensions() {
        return this.windowDimensions;
    }
}

function getWindowDimensions() {
    return { width: window.innerWidth, height: window.innerHeight };
}