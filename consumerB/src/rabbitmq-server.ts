import { Channel, Connection, connect, Message } from 'amqplib';

export default class RabbitmqServer {
    private conn!: Connection;
    private channel!: Channel;

    constructor(private uri: string){}

    async start(): Promise<void>{
        this.conn = await connect(this.uri);
        this.channel = await this.conn.createChannel();
    }

    async publishInQueue(queue:string, message:string) {
        await this.channel.assertQueue(queue, {durable: true})
        return this.channel.sendToQueue(queue, Buffer.from(message))
    }

    async publishInExchange(exchange:string, queues: Array<string>, message:string) {
        await this.channel.assertExchange(exchange, 'direct', {
            durable: true
        })
        console.log(queues);
        for (let ct in queues) {
            await this.channel.bindQueue(queues[ct], exchange, '')
        };
        return this.channel.publish(exchange, '', Buffer.from(message))
    }

    async createQueue(queue:string) {
        return this.channel.assertQueue(queue, {durable: true})
    }

    async consume(queue:string, callback: (message:Message) => void) {
        return this.channel.consume(queue, (message) => {
            callback(message!);
            this.channel.ack(message!);
        })
    }
}