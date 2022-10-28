import {Request, Response} from 'express';
import Api  from '../Api/Response';
import Business from '../../app/business';

export default class ControllerHome {

    index(req: Request, res: Response)
    { 
        let bll = new Business();          
        Api.Ok(res, 'testing, api ...')
    }
}