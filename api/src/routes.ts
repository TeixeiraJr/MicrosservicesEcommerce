import express from 'express';
import {Request, Response} from 'express';
import PurchaseController from './controllers/Purchase';
import RabbitmqServer from './rabbitmq-server';
import {purchaseStoreValidate} from './validations/purchase';

const router = express.Router();

router.post('/purchase', purchaseStoreValidate, PurchaseController.receivePurchase, async function(req: Request,res: Response) {
    const server = new RabbitmqServer('amqp://username:password@rabbitmq:5672')
    await server.start()
    await server.publishInExchange('direct', ['consumer_a', 'consumer_b'], JSON.stringify(req.body));
    res.send(req.body);
});

export default router;