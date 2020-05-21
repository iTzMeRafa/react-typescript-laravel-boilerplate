export enum URLS {
  Home = '/',
  Login = '/login',
  Register = '/register',
  Logout = '/logout',
}

export class UrlService {

  public getBaseURL() {
    const url = window.location;
    return url.protocol + '//' + url.host;
  }

  public getUrlPath() {
    const url = window.location.href;
    const startChar = url.indexOf('/', 8);
    return url.substr(startChar, url.length);
  }

  public navIsActive(naviPath) {
    if (this.getUrlPath() === naviPath) {
      return 'active';
    }

    return '';
  }

  public redirect(url: URLS) {
    return this.getBaseURL() + url;
  }
}
