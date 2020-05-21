import * as React from 'react';
import { observer, inject } from 'mobx-react';

// Interfaces
/* eslint-disable-next-line no-unused-vars */
import {IStoreInterface} from "../interfaces/IStoreInterface";

interface IToastTesterProps {
  stores?: IStoreInterface;
}

@inject('stores')
@observer
export default class ToastTester extends React.Component<IToastTesterProps> {

  public constructor(props: IToastTesterProps) {
    super(props);
  }

  public render() {
    return (
      <button
          type='button'
          className='mt-5 btn-block btn btn-primary'
          onClick={() => this.props.stores.notificationStore.addToast(
              Math.random(),
              `Eingeloggt: ${this.props.stores.userStore.user.isLoggedIn}`,
              `Name: ${this.props.stores.userStore.user.name}`,
          )}
      >
        Klicken um ein Toast zu senden
      </button>
    );
  }
}