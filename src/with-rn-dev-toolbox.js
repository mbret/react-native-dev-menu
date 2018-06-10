/**
 * @flow
 */
import React from 'react'
import { RNDevToolboxContext } from './RNDevToolbox'

export const withRNDevToolbox = (Component: any) => {
  class ComponentWithRNDevToolbox extends React.Component<*> {
    render () {
      return (
        <RNDevToolboxContext.Consumer>
          {rnDevToolbox => {
            return (
              <Component
                {...this.props}
                reactNativeDevToolbox={rnDevToolbox}
              />
            );
          }}
        </RNDevToolboxContext.Consumer>
      )
    }
  }

  return ComponentWithRNDevToolbox
}