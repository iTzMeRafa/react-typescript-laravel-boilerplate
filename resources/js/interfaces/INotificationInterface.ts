export interface IToastInterface {
  id: string | number;
  headline: string | JSX.Element;
  text: string | JSX.Element;
  isVisible: boolean;
}

export interface INotificationStoreInterface {
  toasts: IToastInterface[];
  toastsPosition: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  addToast(id: IToastInterface['id'], headline: IToastInterface['headline'], text: IToastInterface['text']);
}