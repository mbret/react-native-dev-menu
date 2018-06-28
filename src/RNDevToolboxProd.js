/**
 * @flow
 */
import { RNDevToolboxBase } from './RNDevToolboxBase'

export class RNDevToolboxProd extends RNDevToolboxBase {
  /**
   * Never update the comp
   * @returns {boolean}
   */
  shouldComponentUpdate () {
    return false
  }
}
