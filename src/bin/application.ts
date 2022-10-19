import { System } from './system';
import { Framework } from './framework';

export class Application {

    private system: System
    private framework: Framework

    constructor(){
        this.system = new System();
        this.framework = new Framework();
    }

    build(){
        
    }
}