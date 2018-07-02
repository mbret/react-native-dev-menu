/* eslint-env jest */
/**
 * @flow
 */
import React from 'react'
import { RNDevToolbox } from '../RNDevToolbox'
import renderer from 'react-test-renderer'

describe('<RNDevToolbox>', () => {
  test('renders correctly', () => {
    const a = renderer.create(<RNDevToolbox />).toJSON()
    expect(a).toMatchSnapshot()

    const b = renderer.create(<RNDevToolbox enable={false} />).toJSON()
    expect(b).toMatchSnapshot()

    const c = renderer.create(<RNDevToolbox enable />).toJSON()
    expect(c).toMatchSnapshot()
  })
})
