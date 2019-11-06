import {EventEmitter} from "events";

const eventEmitter=new EventEmitter();

class PathStore {
    public paths:string[];
    constructor() {
        this.paths=[];
    }
    addPath(path:string){
        this.paths.push(path);
        eventEmitter.emit("path-added");
    }
}
