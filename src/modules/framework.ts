import { format } from 'date-fns';

export default class Framework {
    constructor(){
        let date = `${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}`;
        console.log(`[Framework] ${date}`)
    }
}