export interface INotificationProvider {
    send(message: string): void;
}