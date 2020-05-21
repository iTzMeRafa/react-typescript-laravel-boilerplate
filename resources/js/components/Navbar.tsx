import * as React from 'react';
import {inject, observer} from "mobx-react";

// Services
import {URLS, UrlService} from '../services/UrlService';

// Interfaces
/* eslint-disable-next-line no-unused-vars */
import { IStoreInterface } from '../interfaces/IStoreInterface';

interface INavbarProps {
  stores?: IStoreInterface;
}

@inject('stores')
@observer
export default class Navbar extends React.Component<INavbarProps> {
  private readonly urlService: UrlService;

  public constructor(props: INavbarProps) {
    super(props);

    this.urlService = new UrlService();
  }

  public render() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href={this.urlService.redirect(URLS.Home)}>BOILERPLATE</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">


            {/* Left Side */}
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href={this.urlService.redirect(URLS.Home)}>Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>

            {this.renderAuthentication()}
          </div>
        </nav>
  );
  }

  private renderAuthentication() {
    return (
      <ul className="navbar-nav form-inline my-2 my-lg-0">

        {/* Logged in */}
        {this.props.stores.userStore.user.isLoggedIn && (
            <>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Hallo, {this.props.stores.userStore.user.name}!
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" onClick={() => this.submitLogoutForm(event)}>Logout</a>
                  <form id="logout-form" className="d-none" action={this.urlService.redirect(URLS.Logout)} method="POST">
                    <input type="hidden" name="_token" id="csrf-token" value={this.props.stores.userStore.user.csrf_token} />
                  </form>
                </div>
              </li>
            </>
        )}

        {/* Not logged in */}
        {!this.props.stores.userStore.user.isLoggedIn && (
            <>
              <li className="nav-item">
                <a className="nav-link" href={this.urlService.redirect(URLS.Login)}>Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={this.urlService.redirect(URLS.Register)}>Register</a>
              </li>
            </>
        )}


      </ul>
    );
  }

  private submitLogoutForm(event) {
    event.preventDefault();
    (document.getElementById('logout-form') as HTMLFormElement).submit();
  }

}