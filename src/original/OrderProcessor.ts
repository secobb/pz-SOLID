class OrderProcessor {
    public processOrder(order: any) {
        // SRP Violation: Клас і рахує ціну, і відправляє сповіщення, і зберігає в БД
        const total = order.items.reduce((acc: number, item: any) => acc + item.price, 0);
        console.log(`Total price: ${total}`);

        // OCP Violation: Щоб додати новий тип оплати, треба правити цей метод (if/else)
        if (order.paymentMethod === 'creditCard') {
            console.log('Processing credit card payment...');
        } else if (order.paymentMethod === 'paypal') {
            console.log('Processing PayPal payment...');
        }

        // DIP Violation: Пряма залежність від конкретних консольних логів та "бази даних"
        console.log('Saving order to Database...');

        // ISP Violation: Можливо, нам не завжди треба надсилати SMS, але метод змушує
        this.sendSMSNotification();
    }

    private sendSMSNotification() {
        console.log('Sending SMS...');
    }
}