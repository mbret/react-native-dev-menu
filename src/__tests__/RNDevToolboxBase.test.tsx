/* eslint-env jest */
/**
 *
 */
import React from 'react'
import { View } from 'react-native'
import { RNDevToolboxBase } from '../RNDevToolboxBase'
import renderer from 'react-test-renderer'

export class InheritBase extends RNDevToolboxBase<any, any> {
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
