/* globals expect, describe, it */
import React from 'react'
import renderer from 'react-test-renderer'
import noop from 'lodash/noop'
import { Provider, OrderedSteps } from '../../../dist'

describe('OrderedSteps component', () => {
  it('should match the stored snapshot', () => {
    const steps = [
      { label: 'Do this', complete: true },
      { label: 'Then this', complete: true },
      { label: 'and then this!', complete: false }
    ]
    const component = renderer.create(
      <Provider>
        <OrderedSteps
          m={3}
          activeStepIndex={1}
          steps={steps}
          onStepSelected={noop}
        />
      </Provider>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
