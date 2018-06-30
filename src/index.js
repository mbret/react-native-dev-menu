/**
 * @flow
 * @todo https://github.com/zertosh/invariant
 */
// import React, { Component } from 'react'
// import { Text } from 'react-native'
import { RNDevToolbox } from './RNDevToolbox'
import { withRNDevToolbox } from './with-rn-dev-toolbox'
// import type { RNDevToolboxInterface } from './RNDevToolboxBase'

export {
  RNDevToolbox,
  withRNDevToolbox
}

export type { RNDevToolboxInterface } from './RNDevToolboxBase'

// const B = ({rnDevToolbox}: {
//   rnDevToolbox: RNDevToolbox
// }) => {
//   rnDevToolbox.debug('sd')
//   rnDevToolbox.foo('sd')
//
//   return (
//     <Text>sdqf</Text>
//   )
// }

// const BEnhanced = withRNDevToolbox(B)

// class A extends Component<{}, {}> {
//   rnDevToolbox: RNDevToolboxInterface
//
//   componentDidMount () {
//     if (this.rnDevToolbox) {
//       this.rnDevToolbox.debug('sdf')
//       // this.rnDevToolbox.foo('sdf')
//     }
//   }
//
//   render () {
//     return (
//       <RNDevToolbox onRef={rnDevToolbox => { this.rnDevToolbox = rnDevToolbox }} indicators={5} />
//     )
//   }
// }

// class A extends Component<{}, {}> {
//   rnDevToolbox: RNDevToolboxInterface
//
//   componentDidMount () {
//     if (this.rnDevToolbox) {
//       this.rnDevToolbox.debug('sdf')
//       // this.rnDevToolbox.foo('sdf')
//     }
//   }
//
//   render () {
//     return (
//       <RNDevToolbox onRef={rnDevToolbox => { this.rnDevToolbox = rnDevToolbox }} indicators={5} />
//     )
//   }
// }
