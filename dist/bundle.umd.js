;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = factory())
    : typeof define === 'function' && define.amd
      ? define(factory)
      : ((global = global || self), (global.ReactCssSpinners = factory()))
})(this, function () {
  'use strict'

  const func = () => {
    console.log('Arrow function')
  }

  return func
})
