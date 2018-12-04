/**
 * @flow
 */
import { Component } from 'react'
import type { Node } from 'react'
import type { Action, Indicator, PersistenceProvider } from './types'

export interface RNDevToolboxInterface {
  debug (debug: any): void;

  processAction (name: string): void;

  registerAction (action: Action | Array<Action>): void;

  open (): void;

  close (): void;

  toggle (): void;
}

export type RNDevToolboxProps<P> = {
  persistenceProvider?: PersistenceProvider,
  onRef?: (ref: RNDevToolboxInterface) => void,
  children?: Node,
  indicators?: Array<Indicator>,
  enable?: boolean,
  actions?: Array<Action>
} & P

export type RNDevToolboxState<S> = {
  tipsModalVisible: boolean,
  debug: ?any,
  indicators: Array<Indicator>,
  opened: boolean,
  actions: Array<Action>,
} & S

export class RNDevToolboxBase<P, S> extends Component<RNDevToolboxProps<P>, RNDevToolboxState<S>> implements RNDevToolboxInterface {
  open: Function
  close: Function
  toggle: Function
  debug: Function

  componentDidMount () {
    if (this.props.onRef) {
      this.props.onRef(this)
    }
  }

  processAction (name: string) {}

  registerAction (action: Action | Array<Action>) {}

  debug (debug: any) {
    this.setState({ debug })
  }

  open () {
    this.setState({ opened: true })
  }

  close () {
    this.setState({ opened: false })
  }

  toggle () {
    this.state.opened ? this.close() : this.open()
  }
}
