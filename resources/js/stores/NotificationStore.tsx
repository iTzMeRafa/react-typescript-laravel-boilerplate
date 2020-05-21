import { observable, computed } from "mobx";

// Interfaces
/* eslint-disable-next-line no-unused-vars */
import { IToastInterface, INotificationStoreInterface } from '../interfaces/INotificationInterface';

class NotificationStore {
  @observable toasts: IToastInterface[] = [
    {
      'id': 0,
      'headline': 'undefined',
      'text': 'undefined',
      'isVisible': false,
    }
  ];

  @observable toastsPosition: INotificationStoreInterface['toastsPosition'] = 'bottomLeft';

  public addToast(id, headline, text) {
    if (this.toasts.find(toast => toast.id === id)) return;

    this.toasts.push(
        {
          'id': id,
          'headline': headline,
          'text': text,
          'isVisible': true,
        }
    );
    this.removeToast(id);
  }

  private removeToast(id) {
    setTimeout(() => {
      // Set Toast invisible for fade out animation
      this.toasts.find(toast => toast.id === id).isVisible = false;

      // Remove toast object from array
      setTimeout(() => {
        for (let i =0; i < this.toasts.length; i++)
          if (this.toasts[i].id === id) {
            this.toasts.splice(i,1);
            break;
          }
      }, 2000);
    }, 4000);
  }
}

export default new NotificationStore();