import { IPaymentProcessor } from '../interfaces/IPaymentProcessor';

export class CreditCardPayment implements IPaymentProcessor {
    process(amount: number): void {
        console.log(`Paid ${amount} via Credit Card.`);
    }
}

export class PayPalPayment implements IPaymentProcessor {
    process(amount: number): void {
        console.log(`Paid ${amount} via PayPal.`);
    }
}