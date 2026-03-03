import { OrderManager } from '../src/refactored/OrderManager';
import { IPaymentProcessor } from '../src/interfaces/IPaymentProcessor';
import { INotificationProvider } from '../src/interfaces/INotificationProvider';

describe('OrderManager SOLID Implementation', () => {
    it('should process payment and send notification', () => {
        // Створюємо макети (Mocks)
        const mockPayment: IPaymentProcessor = { process: jest.fn() };
        const mockNotify: INotificationProvider = { send: jest.fn() };

        const manager = new OrderManager(mockPayment, mockNotify);
        const order = { items: [{ price: 100 }, { price: 50 }] };

        manager.process(order);

        expect(mockPayment.process).toHaveBeenCalledWith(150);
        expect(mockNotify.send).toHaveBeenCalledWith(expect.stringContaining('150'));
    });
});