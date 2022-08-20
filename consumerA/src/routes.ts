import express from 'express';
import {Request, Response} from 'express';
import RabbitmqServer from './rabbitmq-server';

const router = express.Router();

const consumer = async () => {
    const server = new RabbitmqServer('amqp://username:password@rabbitmq:5672');
    await server.start();
    await server.createQueue('consumer_a');
    await server.consume('consumer_a', (message) => {
        console.log(message.content.toString());
        server.publishInQueue('consumer_c', JSON.stringify(message));
    })
    }

consumer()

export default router;