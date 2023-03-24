import React, { Component, Fragment } from 'react'
import MovingText from 'react-moving-text'
import ProgressBar from 'react-bootstrap/ProgressBar';
import  Table  from 'react-bootstrap/Table'
import axios from 'axios'

export default class About extends Component {

  constructor(props){
    super(props)
    this.state = {
      students: []

    }
  }

    componentDidMount(){
      this.getAllStudentS()
    }

    getAllStudentS(){
      axios.get('http://localhost:5000/students/')
      .then(res => {
        this.setState({
          students: res.data
        })
      }).catch((error)=>{ console.log(error)})
    }

    deteteStudent = (id) => {axios.delete('http://localhost:5000/students/delete-student/' + id).then((res) => {this.getAllStudentS()
  
  }).catch((error)=>{ console.log(error)})
 }
  render() {
    const now = 60;
    const nowt = 25;
    const nowf = 50;
    return (
      
        <Fragment>
        <div className='row'>
          <div className='col-lg-6 col-md-12 col-sm-12 slide-in-bottom text-white'>
              <div className='col-lg-6 col-md-12 col-sm-12'>
              <MovingText
      type="fadeInFromLeft"
     duration="1000ms"
     delay="0s"
     direction="normal"
     timing="ease"
     iteration="1"
     fillMode="none">
              <h1>เกี่ยวกับตัวฉัน</h1>
              <p>ชื่อ นายอติวัณณ์ นามสกุล เสืออิ่ม</p>
              <p>Firstname Atiwan Lastname Sua-Im</p>
              <p>เกิดวันที่ 16 กรกฎาคม พ.ศ.2546</p>
              <p>เวลาว่าง ชอบเล่นดุหนังผ่อนคลายที่บ้านและทำความสะอาดบ้าน</p>
              <p>ฉันเป็นคนนิสัยดีติดตลกไม่ชอบใช้กำลังและไม่ชอบความรุ่นแรง</p>
              <p>อาหารที่ชอบ : ข้าวมันไก่และข้าวหน้าทงคัตสึ</p>
              <p>อาหารที่ไม่ชอบ : อาหารที่มีผักเป็นหลัก</p>
              <p>ฉันเป็นคนไม่ดืมแอลกอฮอและไม่สูบบุรี่ ไม่ยุ่งกับสารเสพติดทุกชนิด</p>
              </MovingText>
              <p>ภาษา JavaScript</p>
              <ProgressBar variant="info" now={now} label={`${now}%`} />
              <p>ภาษา Html5</p>
              <ProgressBar variant="success" now={nowf} label={`${nowf}%`} />
              <p>ภาษา php</p>
              <ProgressBar variant="warning" now={nowt} label={`${nowt}%`} />
              <MovingText type="typewriter"
                        dataText={[
                        'Hi...',
                        'My Name is',
                        'Bom',
                        'Se ya'
                      ]} />
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
          <img className='img-fluid slide-in-bottom' src='u.gif' width="1000" height="1000" alt='...'/> {''}
          <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              
              <th>Educations</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>School</th>
            </tr>
          </thead>
          <tbody>
              {
                this.state.students.map((res,index) => (
                <tr key={res._id}>
                  
                  <td>{res.educations}</td>
                  <td>{res.firstname}</td>
                  <td>{res.lastname}</td>
                  <td>{res.school}</td>
                  
                </tr>
                
                ))}
          </tbody>
        </Table>
            
          </MovingText>
          </div>
  
        </div>
        </Fragment>
    )
  }
}
