import * as React from 'react';
import ReactDOM from 'react-dom';
import Wireframe from './components/Wireframe';
import ToastTester from './components/ToastTester';

// Interfaces
/* eslint-disable-next-line no-unused-vars */
import { IDataInterface } from './interfaces/IDataInterface';

require('./bootstrap');

/*
 * This global variable comes from the page associated controller
 * and contains all necessary data for its view and the wireframe
 */
declare var data: IDataInterface;

export default class Home extends React.Component {

  public render () {
    return (
        <Wireframe userInfo={data.globalData.userInfo}>
          <h1 className='text-center mb-3'>REACT-TYPESCRIPT-LARAVEL BOILERPLATE</h1>
          <p>Dies ist ein Web-Applikations Boilerplate, welches React, TypeScript und SCSS für das Frontend verwendet und Laravel als Backend.</p>
          <ToastTester/>
        </Wireframe>
    );
  }
}

if (document.getElementById('app')) {
  ReactDOM.render(<Home />, document.getElementById('app'));
}