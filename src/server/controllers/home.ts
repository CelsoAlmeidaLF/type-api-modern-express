import {Request, Response} from 'express';
import api  from '../Api/Response';
import Business from '../../app/business';

export default class controllerHome {

    static index(req: Request, res: Response)
    { 
        let bll = new Business();          
        api.Ok(res, 'testing, api ...')
    }
}