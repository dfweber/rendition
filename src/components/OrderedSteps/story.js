import * as React from 'react'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'
import { Checkbox, Flex, OrderedSteps } from '../../'
import Readme from './README.md'

const OrderedStepsWrapper = () => {
  const [activeStepIndex, setActiveStepIndex] = React.useState(1)
  const [isComplete, setIsComplete] = React.useState([true, true, false, false])
  const toggleIsComplete = () => {
    const newIsComplete = [...isComplete]
    newIsComplete.splice(activeStepIndex, 1, !isComplete[activeStepIndex])
    setIsComplete(newIsComplete)
  }
  const steps = [
    { label: 'Do this', complete: isComplete[0] },
    { label: 'then this', complete: isComplete[1] },
    { label: 'and then this', complete: isComplete[2] },
    { label: 'and finally this!', complete: isComplete[3] }
  ]
  return (
    <React.Fragment>
      <OrderedSteps
        alignItems='center'
        justifyContent='center'
        m={3}
        activeStepIndex={activeStepIndex}
        onStepSelected={setActiveStepIndex}
        steps={steps}
      />
      <Flex m={3} justifyContent='center' alignItems='center'>
        <Checkbox
          label={`Step ${activeStepIndex + 1} is complete`}
          onChange={toggleIsComplete}
          checked={isComplete[activeStepIndex]}
        />
      </Flex>
    </React.Fragment>
  )
}

storiesOf('Next/OrderedSteps', module)
  .addDecorator(withReadme(Readme))
  .add('Standard', () => {
    return (
      <React.Fragment>
        <OrderedStepsWrapper />
      </React.Fragment>
    )
  })
