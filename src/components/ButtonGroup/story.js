import * as React from 'react'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'
import { faExpand } from '@fortawesome/free-solid-svg-icons/faExpand'
import { faRecycle } from '@fortawesome/free-solid-svg-icons/faRecycle'
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Button, ButtonGroup } from '../../'
import Readme from './README.md'

storiesOf('Next/ButtonGroup', module)
  .addDecorator(withReadme(Readme))
  .add('Standard', () => {
    return (
      <Box m={3}>
        <ButtonGroup>
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </ButtonGroup>
        <ButtonGroup mt={3}>
          <Button icon={<FontAwesomeIcon fixedWidth icon={faExpand} />} />
          <Button icon={<FontAwesomeIcon fixedWidth icon={faRecycle} />} />
          <Button icon={<FontAwesomeIcon fixedWidth icon={faSpinner} />} />
        </ButtonGroup>
      </Box>
    )
  })
