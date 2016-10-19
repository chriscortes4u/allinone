const h = require('react-hyperscript')
const React = require('react')
const { Link } = require('react-router')

module.exports = React.createClass({
  getInitialState: function () {
    return { name: '' }
  },
  onChangeHandler: function (e) {
    this.setState({ name: e.target.value })
  },
  render: function () {
    return (
      h('div.pa4', [
        h('h1', 'Hello ' + this.state.name),
        h('input', {
          placeholder: 'Enter your name',
          onChange: this.onChangeHandler,
          value: this.state.name
        }),
        h(Link, { to: '/', className: 'mt3 db link'}, 'Home')
      ])
    )
  }
})
