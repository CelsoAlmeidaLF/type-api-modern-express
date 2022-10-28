import { format } from 'date-fns';
import System from '../../bin/system';

export default class Framework extends System {
    constructor(){
        super()
        let date = `${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}`;
        console.log(`[Framework] ${date}`)
    }
}