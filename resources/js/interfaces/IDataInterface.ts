/* eslint-disable-next-line no-unused-vars */
import { IUserInfoInterface } from './IUserInfoInterface';

export interface IDataInterface {
  viewData: IViewDataInterface;
  globalData: IGlobalDataInterface;
}

export interface IGlobalDataInterface {
  userInfo: IUserInfoInterface;
  csrf_token: string;
}

/**d
 * The viewData is based on its view and
 * therefore cant be explicitly stated
 */
export interface IViewDataInterface {
  [key: string]: any;
}