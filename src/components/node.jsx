import { makeObservable, observable, action, computed } from "mobx"

export class Node {
    col = 0;
    isVisited = false;
    previousNode = null;
    type = 0;
    row = 0;

    constructor(x, y, type = 0) {
        makeObservable(this, {
            col: observable,
            isVisited: observable,
            previousNode: observable,
            type: observable,
            row: observable,
            nodeType: computed,
            changeType: action,
            resetType: action
        })
        this.col = x;
        this.type = type;
        this.row = y;
    }

    get nodeType() {
        return this.type;
    }

    get nodeId() {
        switch (this.type) {
            case 0:
                return '';
            case 1:
                return '-wall';
            case 2:
                return '-start';
            case 3:
                return '-end';
        }
    }

    changeType(type) {
        this.type = type;
    }

    resetType() {
        this.type = 0;
    }
}

/*export default function createSquare(type = 0) {
    return makeAutoObservable({
        type,
        get getType() {
            return this.type;
        },
        set changeType(type) {
            this.type = type;
        }
    })
}*/