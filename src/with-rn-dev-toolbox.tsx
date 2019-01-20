/* eslint no-unused-vars:0 */
/**
 *
 */
import React, { Component, ComponentType } from 'react'
import { RNDevToolboxContext } from './RNDevToolboxContext'
import hoistStatics from 'hoist-non-react-statics'
import { RNDevToolboxInterface } from './RNDevToolboxBase'

type OwnProps = { rnDevToolbox?: RNDevToolboxInterface | void }

/**
 * Inject the dev tool instance into the component.
 * @see https://flow.org/en/docs/react/hoc/
 */
export function withRNDevToolbox<P> (
  BaseComponent: ComponentType<P & OwnProps>
): ComponentType<P> {
  class ComponentWithRNDevToolbox extends Component<P & OwnProps> {
    render () {
      return (
        <RNDevToolboxContext.Consumer>
          {rnDevToolbox => {
            return (
              <BaseComponent
                {...this.props}
                rnDevToolbox={rnDevToolbox}
              />
            )
          }}
        </RNDevToolboxContext.Consumer>
      )
    }
  }

  return hoistStatics(ComponentWithRNDevToolbox, BaseComponent)
}
