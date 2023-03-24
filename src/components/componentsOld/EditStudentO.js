import React, { Component } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from './common/with-router'

class EditStudent extends Component {
        constructor(props) {
            super(props)
    
            this.state = {
                code: "",
                firstname: "",
                lastname: "",
                email: ""
            }
        }

        componentDidMount() {
            axios.get("http://localhost:5000/students/edit-student/" + this.props.router.params.id)
            .then(res => {
                this.setState({
                    code: res.data.code,
                    firstname: res.data.firstname,
                    lastname: res.data.lastname,
                    email: res.data.email
                })
            })
            .catch((error) => {
                console.log(error)
            })
        }

        onChangStudentCode = (e) => {
            this.setState({code: e.target.value })
        }
    
        onChangStudentFirstname = (e) => {
            this.setState({firstname: e.target.value })
        }
    
        onChangStudentLastname = (e) => {
            this.setState({lastname: e.target.value })
        }
    
        onChangStudentEmail = (e) => {
            this.setState({email: e.target.value })
        }
    
        onSubmit = (e) => {
            e.preventDefault()
    
            const studentObject = {
                code: this.state.code,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email
            }
            axios.put('http://localhost:5000/students/update-student/' + this.props.router.params.id,studentObject)
            .then(res => {
                console.log(res.data)
                alert('แก้ข้อมูลแล้วนะไอสัส!!!')
            })
            .catch((error)=>{ console.log(error)})
            this.setState({code: "",firstname: "",lastname: "",email: ""})
            //window.location.replace('./student-list')
            this.props.router.navigate('/student-list')
        }
  render() {
    return (
        <div>
            <Form onSubmit={this.onSubmit}>
            <Form.Group className='mt-4'>
                <Form.Label>Code</Form.Label>
                <Form.Control type='number' value={this.state.code} onChange={this.onChangStudentCode}></Form.Control>
            </Form.Group>

            <Form.Group className='mt-4'>
                <Form.Label>FirstName</Form.Label>
                <Form.Control type='text' value={this.state.firstname} onChange={this.onChangStudentFirstname}></Form.Control>
            </Form.Group>

            <Form.Group className='mt-4'>
                <Form.Label>LastName</Form.Label>
                <Form.Control type='text' value={this.state.lastname} onChange={this.onChangStudentLastname}></Form.Control>
            </Form.Group>

            <Form.Group className='mt-4'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' value={this.state.email} onChange={this.onChangStudentEmail}></Form.Control>
            </Form.Group>

            <Form.Group className = "mt-4 d-grid gap-2" >
            <Button variant='outline-success' type="submit" >update</Button>
            </Form.Group>

            </Form>
      </div>
    )
  }
}
export default withRouter(EditStudent)