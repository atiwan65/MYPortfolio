import React, { Component, Fragment } from 'react'
import MovingText from 'react-moving-text'

export default class Home extends Component {
  render() {
    return (
      
        <Fragment>
      <div className='row'>
        <div className='col-lg-6 col-md-12 col-sm-12 d-flex align-items-center slide-in-bottom text-white '>
          <div>

          <MovingText
      type="fadeInFromLeft"
     duration="1000ms"
     delay="0s"
     direction="normal"
     timing="ease"
     iteration="1"
     fillMode="none">
            <h1 className='m-0 '>Hi I am Atiwan</h1>
            <MovingText type="typewriter"
                        dataText={[
                        'Hi I am Bom Nice to meet you.',
                        'this is My Portfolio.',
                        'I hope you will be interested in watching.',
                        'See ya.'
                      ]} />
            <p className='ls-2 mt-2'></p>
            </MovingText>
            </div>
        </div>
        
        <div className='col-lg-6 col-md-12 col-sm-12'>
        <MovingText
      type="fadeInFromRight"
     duration="1000ms"
     delay="0s"
     direction="normal"
     timing="ease"
     iteration="1"
     fillMode="none">
        
        <img rounded thumbnail className='img-fluid rounded-pill slide-in-bottom' src='pro.jpg' width="1000" height="1000" alt='...'/> {''}
        </MovingText>
        </div></div>
      
      </Fragment>
    )
  }
}

