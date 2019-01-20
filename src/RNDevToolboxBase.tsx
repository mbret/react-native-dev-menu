/* eslint no-unused-vars:0 */
/**
 *
 */
import React, { Component } from 'react'
import { Action, Indicator, PersistenceProvider } from './types'

export interface RNDevToolboxInterface {
  debug(debug: any): void;

  processAction(name: string): void;

  registerAction(action: Action | Array<Action>): void;

  open(): void;

  close(): void;

  toggle(): void;
}

export type RNDevToolboxProps<P> = P & {
  persistenceProvider?: PersistenceProvider,
  onRef?: (ref: RNDevToolboxInterface) => void,
  // children?: /* Node */ any,
  indicators?: Array<Indicator>,
  enable?: boolean,
  actions?: Array<Action>
}

export type RNDevToolboxState = {
  tipsModalVisible: boolean,
  debug?: any,
  indicators: Array<Indicator>,
  opened: boolean,
  actions: Array<Action>,
}

export abstract class RNDevToolboxBase<P = {}, S = {}> extends Component<RNDevToolboxProps<P>, S & RNDevToolboxState> implements RNDevToolboxInterface {

  componentDidMount () {
    if (this.props.onRef) {
      this.props.onRef(this)
    }
  }

  processAction (name: string) { }

  registerAction (action: Action | Array<Action>) { }

  debug (debug: any) {
    this.setState({ debug })
  }

  open () {
    // @todo type checking issue here https://github.com/Microsoft/TypeScript/issues/19388
    this.setState<any>({ opened: true })
  }

  close () {
    // @todo type checking issue here https://github.com/Microsoft/TypeScript/issues/19388
    this.setState<any>({ opened: false })
  }

  toggle () {
    this.state.opened ? this.close() : this.open()
  }
}
