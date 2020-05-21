import * as React from 'react';
import { observer, inject } from 'mobx-react';

// Interfaces
/* eslint-disable-next-line no-unused-vars */
import { IStoreInterface } from '../interfaces/IStoreInterface';

interface IToastProps {
  stores?: IStoreInterface;
}

@inject('stores')
@observer
export default class Toast extends React.Component<IToastProps> {
  private readonly blockName = 'toastAlert';
  private readonly urlService;

  public constructor (props: IToastProps) {
    super(props);
  }

  public render () {

    return (
        <div className={`${this.blockName} ${this.blockName}__position ${this.blockName}__position--${this.props.stores.notificationStore.toastsPosition}`}>

          {this.props.stores.notificationStore.toasts.map((toast) =>
              <div className={toast.isVisible ? `${this.blockName}__show toast` : `${this.blockName}__hide toast`} role="alert" aria-live="assertive" aria-atomic="true" key={toast.id}>
                <div className="toast-header">
                  <strong className="mr-auto">{toast.headline}</strong>
                  <small className="text-muted">just now</small>
                  <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="toast-body">
                  {toast.text}
                </div>
              </div>
          )}

        </div>
    );
  }
}