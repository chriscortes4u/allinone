const h = require('react-hyperscript')
const { Link } = require('react-router')

module.exports = _ =>
  h('div', [
    h('h2', 'Apps'),
    h('ul', [
      h('li', [ h(Link, { to: '/'}, 'Home')]),
      h('li', [ h(Link, { to: '/hello'}, 'Say Hello')]),
      h('li', [ h(Link, { to: '/guess'}, 'Guess A Number')]),
      h('li', [ h(Link, { to: '/eightball'}, 'Magic Eight Ball')]),
      h('li', [ h(Link, { to: '/calculator'}, 'Calculator')])
    ])
  ])
