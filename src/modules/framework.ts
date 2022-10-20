import { format } from 'date-fns';

export class Framework {
    constructor(){
        let date = `${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}`;
        console.log(`[Framework] ${date}`)
    }
}