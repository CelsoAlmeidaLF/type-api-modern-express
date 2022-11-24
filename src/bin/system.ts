import Iserver from "../server/interface/iServer";
import ServerApi from '../server/server';

export default class System {

    public api?: Iserver

    constructor(){
        console.clear()
        this.api = new ServerApi();
    }
}