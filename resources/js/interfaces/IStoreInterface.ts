// Interfaces
/* eslint-disable-next-line no-unused-vars */
import { INotificationStoreInterface } from './INotificationInterface';
import { IUserStoreInterface } from './IUserInfoInterface';

export interface IStoreInterface {
  notificationStore: INotificationStoreInterface;
  userStore: IUserStoreInterface;
}