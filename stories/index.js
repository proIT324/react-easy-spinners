import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '@storybook/react/demo'
import { Ellipsis, Ring, Ripple } from '../src'

storiesOf('Spinners', module)
  .add('Ellipsis', () => <Ellipsis />)
  .add('Ring', () => <Ring />)
  .add('Ripple', () => <Ripple />)
