import express from 'express';
import RabbitmqServer from './rabbitmq-server';

const router = express.Router();

const consumer = async () => {
    const server = new RabbitmqServer('amqp://username:password@rabbitmq:5672')
    await server.start()
    await server.createQueue('consumer_b');
    await server.consume('consumer_b', (message) => 
        console.log(message.content.toString()));
}

consumer();

export default router;