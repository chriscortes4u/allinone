const h = require('react-hyperscript')
const { Router, Route, hashHistory } = require('react-router')

const Home = require('./components/Home')

module.exports = _ =>
  h(Router, { history: hashHistory }, [
    h(Route, { path: '/', component: Home}, 'Home')
  ])
