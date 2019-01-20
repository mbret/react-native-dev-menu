/* eslint no-unused-vars:0 */
/**
 *
 */
import React from 'react'
import { RNDevToolboxContext } from './RNDevToolboxContext'
import { RNDevToolboxProps, RNDevToolboxState, RNDevToolboxBase } from './RNDevToolboxBase'

export class RNDevToolboxProd extends RNDevToolboxBase<RNDevToolboxProps<{}>, RNDevToolboxState> {
  constructor (props: RNDevToolboxProps<{}>) {
    super(props)
    this.state = {
      opened: false,
      actions: [],
      debug: null,
      indicators: [],
      tipsModalVisible: false
    }
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
