/**
 * @flow
 */
import React from 'react'
import { RNDevToolboxBase } from './RNDevToolboxBase'
import { RNDevToolboxContext } from './RNDevToolboxContext'

export class RNDevToolboxProd extends RNDevToolboxBase<{}, {}> {
  /**
   * Never update the comp
   * @returns {boolean}
   */
  shouldComponentUpdate () {
    return false
  }

  open = () => {}

  close = () => {}

  toggle = () => {}

  render () {
    return (
      <RNDevToolboxContext.Provider value={this}>
        {this.props.children}
      </RNDevToolboxContext.Provider>
    )
  }
}
