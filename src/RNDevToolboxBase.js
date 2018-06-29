/**
 * @flow
 */
import React, { Component } from 'react'
import { RNDevToolboxContext } from './RNDevToolboxContext'
import type { Node } from 'react'
import type { Action } from './index'

export interface RNDevToolboxInterface {
  debug (debug: any): void;
}

export type RNDevToolboxProps = {
  persistenceProvider?: {
    getItem: Function,
    setItem: Function
  },
  onRef?: (ref: RNDevToolboxInterface) => void,
  children?: Node,
  indicators?: any,
  enable?: boolean,
  actions?: Array<Action>
}

type State = {
  tipsModalVisible: boolean,
  debug: string,
  indicators: any,
  opened: boolean,
  actions: Array<Action>
}

export class RNDevToolboxBase extends Component<RNDevToolboxProps, State> implements RNDevToolboxInterface {
  componentDidMount () {
    if (this.props.onRef) {
      this.props.onRef(this)
    }
  }

  registerAction = () => {}

  processAction = (name: string) => {}

  debug = (debug: string) => {}

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
