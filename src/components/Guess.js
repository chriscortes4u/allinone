const h = require('react-hyperscript')
const { Link } = require('react-router')
const serialize = require('form-serialize')
const React = require('react')
const random = getRandomIntInclusive(0, 10)

module.exports = React.createClass({
  getInitialState: function () {
    return { guess: undefined, result: '' }
  },
  submit: function (e) {
    e.preventDefault()
  var resultString = ''

    const data = serialize(e.target, {hash: true})
    if (data.guess === random.toString()){
      resultString = 'Congrats'
    }
    else if (data.guess < random.toString()){
      resultString = 'higher'
    }
    else if (data.guess > random.toString()){
      resultString = 'lower'
    }
    console.log('random: ', random,'guess: ',data.guess, 'result: ', resultString)
    this.setState({ guess: data.guess, result: resultString })
  },
  render(){
    return h('div', [
        h('h1','Guess a number 1 - 10' ),
        h('form', {onSubmit: this.submit}, [
          h('label', {htmlFor: "guess"},"enter number"),
          h('input', {
            name: 'guess',
            id: 'guess',
            type: 'number',
            value: undefined
          }),
          h('button' , 'submit' )
        ]),
        h('p', this.state.result)
    ])
  }
})

// have the computer randomly select number 1 - 10
// and have the user try to guess the number
// and the computer will respond higher or lower
// until

// ----

// have the user think of a number 1 - 10, and
// make the computer guess the number
// by the user providing input
// higher or lower

//

  h(Link, { to: '/', className: 'mt3 db link'}, 'Home')


  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
