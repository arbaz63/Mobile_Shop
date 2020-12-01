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
export const Login = () => {
    
    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onSignInClick=()=>
    {
        if(email===''||password==='')
        {
            setErrorMessage("Please Enter Credentials");
        }
        else if(email!=='abc@gmail.com'||password!=='123')
        {
            setErrorMessage("Credentials didn't matched")
        }
        else
        {
            setSuccess('Logged in successfully')
            setErrorMessage('')
        }
    }
    return (
        <div>
            <Header1/>
            <Row >
                <Col offset={8}style={{WebkitBoxShadow:'0px 2px 7px 2px rgba(0,0,0,0.75)',padding:'20px',margin:'20px auto',width:'50%'}}>
                <h1>Sign in</h1>
                    <Form
                    labelCol={{
                    span: 8,
                    }}
                    wrapperCol={{
                    span: 14,
                    }}
                    layout="horizontal"
                    >
                    
                    <Form.Item style={{marginLeft:'350px'}}>
                    <Input style={{width:'200px'}} placeholder='Email'value={email}onChange={(e)=>setEmail(e.target.value)}/>
                    </Form.Item>
                    <Form.Item style={{marginLeft:'350px'}}>
                    <Input style={{width:'200px'}} placeholder='Password'type='password'value={password}onChange={(e)=>setPassword(e.target.value)}/>
                    </Form.Item>
                   
                    <Form.Item style={{marginLeft:'350px'}}>
                    <Button onClick={onSignInClick} type='primary' style={{width:'200px'}}>Sign In</Button>
                    </Form.Item>
                    <h2 style={{color:'red'}}>{errorMessage}</h2>
                    <h2 style={{color:'green'}}>{success}</h2>
                </Form>
                </Col>
            </Row>
        </div>
    )
}
