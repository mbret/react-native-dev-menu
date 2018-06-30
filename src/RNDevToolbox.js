/**
 * @flow
 */
import React, { PureComponent } from 'react'
import { style } from './constants'
import { RNDevToolboxDev } from './RNDevToolboxDev'
import { RNDevToolboxProd } from './RNDevToolboxProd'
import type { RNDevToolboxProps } from './RNDevToolboxBase'

export class RNDevToolbox extends PureComponent<RNDevToolboxProps<{}>, {}> {
  static VALID = style.colors.colorValid
  static DANGER = style.colors.colorError

  useProd = () => (this.props.enable === false || (!__DEV__ && this.props.enable === false))

  render () {
    return this.useProd() ? <RNDevToolboxProd {...this.props} /> : <RNDevToolboxDev {...this.props} />
  }
}
