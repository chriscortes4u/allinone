const h = require('react-hyperscript')
const { Link } = require('react-router')
const React = require('react')
const serialize = require('form-serialize')

const ComputerGuess = React.createClass({
  getInitialState: function () {
    return { try: getRandomIntInclusive(1, 10), min: 1, max: 10, isCorrect: false }
  },
  tryHigher: function (e) {
    // var newMax = this.state.max
    var newMin = this.state.try + 1
    var newTry = getRandomIntInclusive(newMin, this.state.max)

    this.setState({ try: newTry, min: newMin })
  },
  tryLower: function () {
    var newMax = this.state.try - 1
    // var newMin = this.state.min
    var newTry = getRandomIntInclusive(this.state.min, newMax)

    this.setState({ try: newTry, max: newMax })
  },
  thatsCorrect: function () {
    this.setState({ isCorrect: true })
  },
  render() {
    console.log('try:', this.state.try, 'min:', this.state.min, 'max:', this.state.max)
    var message = ''
    
    if ((this.state.min === this.state.max) || (this.state.isCorrect === true)) {
      message = this.state.try + ' is indeed the correct number! Congrats!!'
    } else {
      message = 'Is the number: ' + this.state.try
    }

    return h('div.pa3', [
        h('h1','Computer Guess a Number 1 - 10' ),
        h('p', message),
        h('button.f6.link.dim.br2.ba.bw1.ph3.pv1.mb2.dib.mid-gray.mr2',
          { onClick: this.tryLower},
          'Try Lower' ),
        h('button.f6.link.dim.br2.ba.bw1.ph3.pv1.mb2.dib.mid-gray.mr2',
          { onClick: this.tryHigher},
          'Try Higher' ),
        h('button.f6.link.dim.br2.ba.bw1.ph3.pv1.mb2.dib.mid-gray',
          { onClick: this.thatsCorrect},
          'That\'s Correct!' ),
        h(Link, { to: '/', className: 'mt3 db link'}, 'Home')
    ])
  }
})

const random = getRandomIntInclusive(1, 10)

const HumanGuess = React.createClass({
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
    this.setState({ guess: data.guess, result: resultString })
  },
  render(){
    return h('div.pa3', [
        h('h1','Human Guess a Number 1 - 10' ),
        h('form', {onSubmit: this.submit}, [
          h('label.mr2', {htmlFor: "guess"}, 'Enter Number:'),
          h('input.w3.pa1.mr2', {
            name: 'guess',
            id: 'guess',
            type: 'number',
            value: undefined
          }),
          h('button.f6.link.dim.br2.ba.bw1.ph3.pv1.mb2.dib.mid-gray' , 'SUBMIT' )
        ]),
        h('p', this.state.result),
        h(Link, { to: '/', className: 'mt3 db link'}, 'Home')
    ])
  }
})

module.exports = React.createClass({
  render() {
    return h('div', [
      h(HumanGuess),
      h('hr'),
      h(ComputerGuess)
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

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

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
