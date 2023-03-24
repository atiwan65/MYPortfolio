import React, { Component, Fragment } from 'react'
import MovingText from 'react-moving-text'


export default class Contact extends Component {
  render() {
    return (
      
        <Fragment>
      <div className='row'>
        <div className='col-lg-6 col-md-12 col-sm-12 d-flex  slide-in-bottom text-white '>
          <div>
          <MovingText
      type="fadeInFromLeft"
     duration="1000ms"
     delay="0s"
     direction="normal"
     timing="ease"
     iteration="1"
     fillMode="none">
            <h1 className=''>ติดต่อได้ที่</h1>
            <p></p>
            <a href ="https://line.me/ti/p/2FzvYuvFTe" target="_blank"><img className='img-fluid slide-in-bottom' src='line.png' width="40" height="40" alt='...'/></a>
            <p></p>
            <p>LineID: bom2310</p>
            <p></p>
            <a href ="https://www.facebook.com/profile.php?id=100004753929579&mibextid=ZbWKwL" target="_blank"><img className='img-fluid slide-in-bottom' src='face.png' width="40" height="40" alt='...'/></a>
            <p></p>
            <p>Facebook: บอม บอม</p>
            <a href ="tel:+0961323507" target="_blank"><img className='img-fluid slide-in-bottom' src='phone.png' width="40" height="40" alt='...'/></a>
            <p></p>
            <p>Tel: 0961323507</p>
            <p></p>
            <a href ="https://mail.google.com/mail/u/0/?tab=rm&ogbl" target="_blank"><img className='img-fluid slide-in-bottom' src='email.png' width="40" height="40" alt='...'/></a>
            <p></p>
            <p>Email: atiwan.suai@northbkk.ac.th</p>
            <p></p>
            <a href ="https://www.google.com/maps/search/map/@13.9028445,100.5471202,12z/data=!3m1!4b1?hl=en-GB" target="_blank"><img className='img-fluid slide-in-bottom' src='map.png' width="40" height="40" alt='...'/></a>
            <p></p>
            <p>Home: ที่อยู่บ้านตัวเอง</p>
            <a href ="https://github.com/atiwan65" target="_blank"><img className='img-fluid slide-in-bottom' src='git.webp' width="50" height="50" alt='...'/></a>
            <p></p>
            <p>Github: atiwan65</p>
            

            

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
        
        <img className='img-fluid slide-in-bottom' src='me2.jpg' width="1000" height="1000" alt='...'/> {''}
        </MovingText>
        </div></div>
      
      </Fragment>
    )
  }
}

