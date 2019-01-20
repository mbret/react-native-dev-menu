/* eslint-env jest */
/**
 *
 */
import React from 'react'
import { RNDevToolboxDev } from '../RNDevToolboxDev'
import renderer from 'react-test-renderer'

describe('<RNDevToolboxDev>', () => {
  test('renders correctly', () => {
    const a = renderer.create(<RNDevToolboxDev />).toJSON()
    expect(a).toMatchSnapshot()
  })
})
