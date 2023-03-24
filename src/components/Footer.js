import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer style={{padding:10}} className='bg-dark footer footer-copyright text-center'>
        @ {new Date().getFullYear()} copyright : <a href='https://www.northbkk.ac.th/' target="_blank">TTDI.norkthbkk.ac.th</a>
        </footer>
    )
  }
}
