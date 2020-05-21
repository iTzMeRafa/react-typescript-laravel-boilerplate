import * as React from 'react';


export default class Footer extends React.Component {
  public render () {
    return (
        <footer id="footer">
          <p>&copy; {(new Date().getFullYear())} All rights reserved.</p>
          <div className="footer-navigation">
            <ul>
              <li><a href='#'> Impressum </a></li>
              <li><a href='#'> Datenschutz </a></li>
              <li><a href='#'> Sonstiges </a></li>
            </ul>
          </div>
        </footer>
    );
  }
}