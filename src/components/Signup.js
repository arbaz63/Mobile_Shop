import React,{useState} from 'react'
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Row,
    DatePicker,
    InputNumber,
    Col,
    Switch,
  } from 'antd';
import { Header1 } from './Header';
export const Signup = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [date, setDate] = useState('')
    const [gender, setGender] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const onSignUpClick=()=>
    {
        if(name===''||email===''||password===''||confirmPassword===''||date===''||gender==='')
        {
            setErrorMessage("Please Fill all the fields");
        }
        else if(password!==confirmPassword)
        {
            setErrorMessage("Password did't match");
        }
        else if(password.length<8)
        {
            setErrorMessage("Minimum Password Length is 8")
        }
        else
        {
            setSuccess('Signed up successfully')
            setErrorMessage('')
        }
    }
    return (
        <div >
            <Header1/>
            <Row >
                <Col offset={8}style={{WebkitBoxShadow:'0px 2px 7px 2px rgba(0,0,0,0.75)',padding:'20px',margin:'20px auto',width:'50%'}}>
                <h1>Sign up</h1>
                    <Form
                    labelCol={{
                    span: 16,
                    }}
                    wrapperCol={{
                    span: 20,
                    }}
                    layout="horizontal"
                    >
                    
                    <Form.Item style={{marginLeft:'350px'}}>
                    <Input placeholder='Enter username' style={{width:'200px'}}value={name}onChange={(e)=>setName(e.target.value)}/>
                    </Form.Item>
                    <Form.Item style={{marginLeft:'350px'}}>
                    <Select placeholder='Select Gender' style={{width:'200px'}} onChange={(value)=>setGender(value)}>
                        <Select.Option value="Male">Male</Select.Option>
                        <Select.Option value="Female">Female</Select.Option>
                    </Select>
                    </Form.Item>
                    <Form.Item style={{marginLeft:'350px'}}>
                    <DatePicker  style={{width:'200px'}} placeholder='Date Of Birth'onChange={(date,dateString)=>setDate(dateString)}/>
                    </Form.Item>
                    <Form.Item style={{marginLeft:'350px'}}>
                    <Input style={{width:'200px'}} placeholder='Email'value={email}onChange={(e)=>setEmail(e.target.value)}/>
                    </Form.Item>
                    <Form.Item style={{marginLeft:'350px'}}>
                    <Input style={{width:'200px'}} placeholder='Password'type='password'value={password}onChange={(e)=>setPassword(e.target.value)}/>
                    </Form.Item>
                    <Form.Item style={{marginLeft:'350px'}}>
                    <Input style={{width:'200px'}} placeholder='Confirm Password'type='password'value={confirmPassword}onChange={(e)=>setConfirmPassword(e.target.value)}/>
                    </Form.Item>
                    <Form.Item style={{marginLeft:'350px'}}>
                    <Button onClick={onSignUpClick} type='primary' style={{width:'200px'}}>Sign up</Button>
                    </Form.Item>
                <h2 style={{color:'red'}}>{errorMessage}</h2>
                <h2 style={{color:'green'}}>{success}</h2>
                </Form>
                </Col>
            </Row>
                
        </div>
    )
}
