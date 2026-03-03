export interface IPaymentProcessor {
    process(amount: number): void;
}