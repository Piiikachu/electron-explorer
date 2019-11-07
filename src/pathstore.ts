import { EventEmitter } from "events";

export interface PathContent {
    index: number;
    path: string;
}

export default class PathStore extends EventEmitter {
    public paths: PathContent[];
    private currentIndex: number;
    private pathIndex: number;
    constructor() {
        super();
        this.paths = [];
        this.currentIndex = 0;
        this.pathIndex = 0;
    }
    addPath(path: string) {
        this.pathIndex += 1;
        this.paths.push({ index: this.pathIndex, path: path });
        this.emit("path-added", path);
    }
    getPaths() {
        return this.paths;
    }
    removePath(target: number) {
        let paths = this.paths;
        let current = this.currentIndex;
        if (current == target) {
            paths.forEach((p, index) => {
                if (p.index == target) {
                    let nextP = paths[index + 1] || paths[index - 1]
                    if (nextP) {
                        current = nextP.index;
                    }
                }
            });
        }
        this.currentIndex = current;
        this.paths = paths.filter(p => p.index != target);
        this.emit("path-removed");
    }
    changeCurrent(index: number) {
        if (index != this.currentIndex) {
            this.currentIndex = index;
        }
        this.emit("currentpath-changed");
    }
}