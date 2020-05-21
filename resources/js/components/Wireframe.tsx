import * as React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Toast from './Toast';

import { Provider } from 'mobx-react';

// Interfaces
/* eslint-disable-next-line no-unused-vars */
import { IUserInfoInterface } from '../interfaces/IUserInfoInterface';

// Stores
import stores from '../Stores/stores';

interface IWireFrameProps {
  userInfo: IUserInfoInterface;
}

export default class Wireframe extends React.Component<IWireFrameProps> {
  private readonly blockName = 'wireframe';

  public constructor (props: IWireFrameProps) {
    super(props);

    stores.userStore.updateUserInfos(this.props.userInfo);
  }

  public render () {
    return (
        <Provider stores={stores}>
          <div className={`${this.blockName}`}>

            <Navbar/>
            <Toast />

            <div className="container">

              <section className="content">
                {this.props.children}
              </section>
              <Footer/>
            </div>

          </div>
        </Provider>
    );
  }
}