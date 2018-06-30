/**
 * @flow
 */
import { Component } from 'react'
import type { Node } from 'react'
import type { Action, Indicator } from './index'

export interface RNDevToolboxInterface {
  debug (debug: any): void;
  processAction (name: string): void;
  registerAction (action: Action): void;
}

export type RNDevToolboxProps<P> = {
  persistenceProvider?: {
    getItem: Function,
    setItem: Function
  },
  onRef?: (ref: RNDevToolboxInterface) => void,
  children?: Node,
  indicators?: any,
  enable?: boolean,
  actions?: Array<Action>
} & P

export type RNDevToolboxState<S> = {
  tipsModalVisible: boolean,
  debug: string,
  indicators: Array<Indicator>,
  opened: boolean,
  actions: Array<Action>,
} & S

export class RNDevToolboxBase<P, S> extends Component<RNDevToolboxProps<P>, RNDevToolboxState<S>> implements RNDevToolboxInterface {
  componentDidMount () {
    if (this.props.onRef) {
      this.props.onRef(this)
    }
  }

  debug = (debug: any) => {}
  processAction = (name: string) => {}
  registerAction = (action: Action) => {}
}
