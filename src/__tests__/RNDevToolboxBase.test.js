/* eslint-env jest */
/**
 * @flow
 */
import React from 'react'
import { View } from 'react-native'
import { RNDevToolboxBase } from '../RNDevToolboxBase'
import renderer from 'react-test-renderer'

export class InheritBase extends RNDevToolboxBase<*, *> {
  render () {
    return (
      <View />
    )
  }
}

describe('<RNDevToolboxBase>', () => {
  test('renders correctly', () => {
    const a = renderer.create(<InheritBase />).toJSON()
    expect(a).toMatchSnapshot()
  })
})
