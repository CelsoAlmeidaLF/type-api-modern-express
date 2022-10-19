import { format } from 'date-fns';
import {v4} from 'uuid'

export class Api {

    static Ok(res: any, result: string){

        let date = `${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}`;
        let uid = v4();

        res.json({
            uid:uid,
            mensagem: result,
            dtConsulta: date
        });
    }

} 