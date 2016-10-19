const h = require('react-hyperscript')
const { Router, Route, hashHistory } = require('react-router')

const Home = require('./components/Home')

const Hello = require('./components/Hello')
const Guess = require('./components/Guess')
const Eightball = require('./components/Eightball')
const Calculator = require('./components/Calculator')

module.exports = _ =>
  h(Router, { history: hashHistory }, [
    h(Route, { path: '/', component: Home}),
    h(Route, { path: '/hello', component: Hello}),
    h(Route, { path: '/guess', component: Guess}),
    h(Route, { path: '/eightball', component: Eightball}),
    h(Route, { path: '/calculator', component: Calculator})
  ])
