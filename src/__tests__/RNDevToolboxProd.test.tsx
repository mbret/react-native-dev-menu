/* eslint-env jest */
/**
 * @see https://medium.com/@jigishchawda/we-will-be-writing-unit-tests-for-the-above-mentioned-login-component-9e02002e7ff8
 *
 */
import React from 'react'
import { RNDevToolboxProd } from '../RNDevToolboxProd'
import renderer from 'react-test-renderer'

describe('<RNDevToolboxProd>', () => {
  test('renders correctly', () => {
    const a = renderer.create(<RNDevToolboxProd />).toJSON()
    expect(a).toMatchSnapshot()

    const b = renderer.create(<RNDevToolboxProd onRef={() => {}} />).toJSON()
    expect(b).toMatchSnapshot()
  })

  test('.registerAction()', () => {
    const myComp = renderer.create(<RNDevToolboxProd />).getInstance() as unknown as RNDevToolboxProd

    expect(myComp.registerAction({ name: 'foo', task: () => {} })).toBe(undefined)
  })

  test('.processAction()', () => {
    const myComp = renderer.create(<RNDevToolboxProd />).getInstance() as unknown as RNDevToolboxProd

    expect(myComp.processAction('foo')).toBe(undefined)
  })

  test('.open()', () => {
    const myComp = renderer.create(<RNDevToolboxProd />).getInstance() as unknown as RNDevToolboxProd

    expect(myComp.open()).toBe(undefined)
  })

  test('.close()', () => {
    const myComp = renderer.create(<RNDevToolboxProd />).getInstance() as unknown as RNDevToolboxProd

    expect(myComp.close()).toBe(undefined)
  })

  test('.debug()', () => {
    const myComp = renderer.create(<RNDevToolboxProd />).getInstance() as unknown as RNDevToolboxProd

    expect(myComp.debug('debug')).toBe(undefined)
  })

  test('.toggle()', () => {
    const myComp = renderer.create(<RNDevToolboxProd />).getInstance() as unknown as RNDevToolboxProd

    expect(myComp.toggle()).toBe(undefined)
    myComp.setState({ opened: true })
    expect(myComp.toggle()).toBe(undefined)
  })
})
