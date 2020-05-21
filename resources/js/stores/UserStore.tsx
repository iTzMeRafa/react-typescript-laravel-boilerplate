import { observable, computed } from "mobx";

// Interfaces
/* eslint-disable-next-line no-unused-vars */
import { IUserInfoInterface } from '../interfaces/IUserInfoInterface';

class UserStore {
  @observable user: IUserInfoInterface =
    {
      id: 0,
      name: 'undefined',
      email: 'undefined',
      isLoggedIn: false,
      csrf_token: 'aaaaaaaaa',
    };

  public updateUserInfos(userInfo: IUserInfoInterface) {
    this.user = userInfo;
  }
}

export default new UserStore();