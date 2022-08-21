import {NextFunction, Request, Response} from 'express';
import {validationResult} from 'express-validator';
import purchase from '../database/repository/createuser'

export default {
    async receivePurchase (req: Request, res: Response, next: NextFunction) {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            })
        } else {
            console.log('req.body', req.body);
            const newUser = await purchase.findOrCreateUser(req.body.customer)
            if (newUser) {
                next();
            } else {
                res.status(400).json({
                    errors: 'Houve um problema para cadastrar o usuário'
                })
            }
        }
    }
}