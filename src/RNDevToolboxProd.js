/**
 * @flow
 */
import React from 'react'
import { RNDevToolboxBase } from './RNDevToolboxBase'
import { RNDevToolboxContext } from './RNDevToolboxContext'
import type { RNDevToolboxProps, RNDevToolboxState } from './RNDevToolboxBase'

export class RNDevToolboxProd extends RNDevToolboxBase<RNDevToolboxProps<{}>, RNDevToolboxState<{}>> {
  state = {
    opened: false,
    actions: [],
    debug: null,
    indicators: [],
    tipsModalVisible: false
  }

  /**
   * We only render children inside context
   * to no broke the global api
   * @returns {function}
   */
  render () {
    return (
      <RNDevToolboxContext.Provider value={this}>
        {this.props.children}
      </RNDevToolboxContext.Provider>
    )
  }
}
