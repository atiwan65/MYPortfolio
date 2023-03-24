import React, { Component } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from './common/with-router'

class EditStudent extends Component {
        constructor(props) {
            super(props)
    
            this.state = {
                educations: "",
                firstname: "",
                lastname: "",
                school: ""
            }
        }

        componentDidMount() {

            axios.get("http://localhost:5000/students/edit-student/" + this.props.router.params.id)
            .then(res => {
                this.setState({
                    educations: res.data.educations,
                    firstname: res.data.firstname,
                    lastname: res.data.lastname,
                    school: res.data.school
                })
            })
            .catch((error) => {
                console.log(error)
            })
            
        }

        onChangStudentEducations = (e) => {
            this.setState({educations: e.target.value })
        }
    
        onChangStudentFirstname = (e) => {
            this.setState({firstname: e.target.value })
        }
    
        onChangStudentLastname = (e) => {
            this.setState({lastname: e.target.value })
        }
    
        onChangStudentSchool = (e) => {
            this.setState({school: e.target.value })
        }
    
        onSubmit = (e) => {
            e.preventDefault()
    
            const educationObject = {
                educations: this.state.educations,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                school: this.state.school
            }
            axios.put('http://localhost:5000/students/update-student/' + this.props.router.params.id,educationObject)
            .then(res => {
                console.log(res.data)
                alert('แก้ข้อมูลแล้วนะไอสัส!!!')
            })
            .catch((error)=>{ console.log(error)})
            this.setState({educations: "",firstname: "",lastname: "",school: ""})
            
            this.props.router.navigate('/student-list')
        }
  render() {
    return (
        <div>
            <Form onSubmit={this.onSubmit}>
            <Form.Group className='mt-4 text-white'>
                <Form.Label>Educations</Form.Label>
                <Form.Control type='text' value={this.state.educations} onChange={this.onChangStudentEducations}></Form.Control>
            </Form.Group>

            <Form.Group className='mt-4 text-white'>
                <Form.Label>FirstName</Form.Label>
                <Form.Control type='text' value={this.state.firstname} onChange={this.onChangStudentFirstname}></Form.Control>
            </Form.Group>

            <Form.Group className='mt-4 text-white'>
                <Form.Label>LastName</Form.Label>
                <Form.Control type='text' value={this.state.lastname} onChange={this.onChangStudentLastname}></Form.Control>
            </Form.Group>

            <Form.Group className='mt-4 text-white'>
                <Form.Label>School</Form.Label>
                <Form.Control type='text' value={this.state.school} onChange={this.onChangStudentSchool}></Form.Control>
            </Form.Group>

            <Form.Group className = "mt-4 d-grid gap-2" >
            <Button variant='success' type="submit" >update</Button>
            </Form.Group>

            </Form>
      </div>
    )
  }
}
export default withRouter(EditStudent)