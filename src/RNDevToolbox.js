/**
 * @flow
 */
import React, { Component } from 'react'
import { colors } from './style'
import { RNDevToolboxDev } from './RNDevToolboxDev'
import { RNDevToolboxProd } from './RNDevToolboxProd'
import type { RNDevToolboxProps } from './RNDevToolboxBase'

export class RNDevToolbox extends Component<RNDevToolboxProps, {}> {
  static VALID = colors.colorValid
  static DANGER = colors.colorError

  useProd = () => (this.props.enable === false || (!__DEV__ && this.props.enable === false))

  render () {
    return this.useProd() ? <RNDevToolboxProd {...this.props} /> : <RNDevToolboxDev {...this.props} />
  }
}
