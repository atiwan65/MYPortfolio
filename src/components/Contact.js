import React, { Component, Fragment } from 'react'
import MovingText from 'react-moving-text'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default class Contact extends Component {
  
  
  
  componentDidMount(){
    document.title = "ติดต่อฉัน"
  }


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
            {" "}LineID: bom2310
            <p></p>
            <a href ="https://www.facebook.com/profile.php?id=100004753929579&mibextid=ZbWKwL" target="_blank"><img className='img-fluid slide-in-bottom' src='face.png' width="40" height="40" alt='...'/></a>
            {" "}Facebook: บอม บอม
            <p></p>
            <a href ="tel:+0961323507" target="_blank"><img className='img-fluid slide-in-bottom' src='phone.png' width="40" height="40" alt='...'/></a>
            {" "}Tel: 0961323507
            <p></p>
            <a href ="https://mail.google.com/mail/u/0/?tab=rm&ogbl" target="_blank"><img className='img-fluid slide-in-bottom' src='email.png' width="40" height="40" alt='...'/></a>
            {" "}Email: atiwan.suai@northbkk.ac.th
            <p></p>
            <a href ="https://www.google.com/maps/search/map/@13.9028445,100.5471202,12z/data=!3m1!4b1?hl=en-GB" target="_blank"><img className='img-fluid slide-in-bottom' src='map.png' width="40" height="40" alt='...'/></a>
            {" "}Home: ที่อยู่บ้านตัวเอง
            <p></p>
            <a href ="https://github.com/atiwan65" target="_blank"><img className='img-fluid slide-in-bottom' src='git.webp' width="50" height="50" alt='...'/></a>
            {" "}Github: atiwan65
<div className='d-flex'>
            <Card className='m-2' style={{ width: '11rem' }}>
              <Card.Img variant="top" src="u.gif" />
              <Card.Body>
                <Card.Title className='text-dark'>Card Title</Card.Title>
                <Card.Text className='text-dark'>
                 ตัวอย่างเว็บ Code Commission
                </Card.Text>
                <a href='https://ggez02.000webhostapp.com/test01.html' target="_blank">
                <Button variant="primary">Go to Example</Button>
                </a>
              </Card.Body>
            </Card>
            
            <Card className='m-2' style={{ width: '11rem' }}>
              <Card.Img variant="top" src="u.gif" />
              <Card.Body>
                <Card.Title className='text-dark'>Card Title</Card.Title>
                <Card.Text className='text-dark'>
                ตัวอย่างเว็บ NextDateProgram
                </Card.Text>
                <a href='https://ggez02.000webhostapp.com/test02.html' target="_blank">
                <Button variant="primary">Go to Example</Button>
                </a>
              </Card.Body>
            </Card>
            </div>
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
        
        <img className='img-fluid rounded slide-in-bottom' src='me4.jpg' width="1000" height="1000" alt='...'/> {''}
        </MovingText>
        </div></div>
      
      </Fragment>
    )
  }
}

