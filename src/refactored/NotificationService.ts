import { INotificationProvider } from '../interfaces/INotificationProvider';

export class EmailNotification implements INotificationProvider {
    send(message: string): void {
        console.log(`Email sent: ${message}`);
    }
}

export class SMSNotification implements INotificationProvider {
    send(message: string): void {
        console.log(`SMS sent: ${message}`);
    }
}