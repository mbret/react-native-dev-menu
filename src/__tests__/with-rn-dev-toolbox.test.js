/* eslint-env jest */
/**
 * @flow
 */
import React from 'react'
import renderer from 'react-test-renderer'
import { withRNDevToolbox } from '../with-rn-dev-toolbox'
import { Text } from 'react-native'

describe('withRNDevToolbox', () => {
  it('should return component', () => {
    const enhanced = withRNDevToolbox(Text)

    expect(typeof enhanced).toBe('function')
  })

  test('renders correctly', () => {
    const Enhanced = withRNDevToolbox(Text)
    const a = renderer.create(<Enhanced />).toJSON()
    expect(a).toMatchSnapshot()
  })
})
