import {NextFunction, Request, Response} from "express";
import {validationResult} from "express-validator";

export default { 
    async receivePurchase (req: Request, res: Response, next: NextFunction) {
        console.log('request.body', req.body)
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            })
        } else {
            next();
        }
    }
}