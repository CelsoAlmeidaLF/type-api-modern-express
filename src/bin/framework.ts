import System from './system';

export default class Framework extends System {
    constructor(){
        super();
    }

    server(){        
        this.api?.server();
    }
}