import { IPaymentProcessor } from '../interfaces/IPaymentProcessor';
import { INotificationProvider } from '../interfaces/INotificationProvider';

export class OrderManager {
    // DIP: Залежимо від інтерфейсів, а не від реалізацій
    constructor(
        private paymentProcessor: IPaymentProcessor,
        private notificationProvider: INotificationProvider
    ) {}

    public process(order: { items: { price: number }[] }) {
        const total = order.items.reduce((acc, item) => acc + item.price, 0);

        this.paymentProcessor.process(total);
        this.notificationProvider.send(`Order for ${total} processed successfully.`);
    }
}