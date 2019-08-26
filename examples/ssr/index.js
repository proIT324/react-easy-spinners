const { createElement } = require('react')
const { renderToString } = require('react-dom/server')
const { Ripple } = require('react-easy-spinners')
const express = require('express')

const port = 3000
const app = express()

app.get('*', (req, res) => {
  const el = createElement(Ripple)
  const html = renderToString(el)
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
    </head>
    <body>
      ${html}
    </body>
    </html>
  `)
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
