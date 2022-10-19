import { ServerApi } from '../server/server';

export class Application {
    constructor(){
        console.log('[Application] build ...')
        
        // Create Server API.
        let server = new ServerApi();
        server.createServer();
    }
}