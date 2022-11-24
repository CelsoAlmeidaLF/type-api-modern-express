import express from 'express';
import parser from 'body-parser';
import router from './routers/router';
import IServer from './interface/iServer';

const app = express();
const port : number = 3000;

export default class ServerApi implements IServer {

    public middleware(): void {
        this._middleware();
    }

    public routers(): void {
        this._routers();
    }

    public pipeline(): void {
        this._pipeline();
    }

    public server(): void {
        this._server();
    }

    private _middleware(){
        app.use(parser.urlencoded({extended: true}));
        app.use(parser.json());
    }

    private _routers(){
        app.use('/api/v1/', router)
    }

    private _pipeline(){
        this._middleware();
        this._routers();
    }

    private _server(){
        this._pipeline();
        app.listen(port, () => 
            console.log(`rodando: http://localhost:${port}/api/v1`));
    } 

}