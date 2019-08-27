import { configure, addParameters } from '@storybook/react'

addParameters({
  options: {
    name: 'Easy Spinners',
    isFullscreen: false,
    showPanel: true
    // more configuration here
  }
})

function loadStories () {
  require('../stories/index.js')
}

configure(loadStories, module)
