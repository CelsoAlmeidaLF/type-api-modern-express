import { Application } from './application';

class Program extends Application {
    
    constructor(){
        super();
    }

    main(){
        this.build();
    }
}

let prog = new Program();
prog.main();
