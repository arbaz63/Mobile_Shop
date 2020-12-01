import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Upload, message,Row,Col
} from 'antd';
import { AdminHeader } from './AdminHeader';
export const AddProduct = () => {
    
    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState('')
    const [name, setName] = useState('')
    const [catagory, setCatagory] = useState('')
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const add=()=>
    {
        if(name===''||catagory===''||price===0||quantity===0)
        {
            setErrorMessage('Please Fill All the Fields')
        }
        else if(quantity<=0 || price<=0)
        {
            setErrorMessage("Please Enter Positive Value greater than zero")
        }
        else
        {
            setSuccess("Product Added Successfully")
            setErrorMessage('')
        }
    }
    return (
        <div>
            <AdminHeader/>
            <Row>
                <Col offset={6}>
                    <h1>Add a product</h1>
                </Col>
            </Row>
            <Row >
                <Col span={3}offset={8}>
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    >
                        {<img  alt="avatar" style={{ width: '100%' }} />}
                    </Upload>
                </Col>
                <Col span={6}>
                    <Form
                    labelCol={{
                    span: 4,
                    }}
                    wrapperCol={{
                    span: 14,
                    }}
                    layout="horizontal"
                >
                    
                    <Form.Item label="Name">
                    <Input placeholder="Enter product name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    </Form.Item>
                    <Form.Item label="Catagory">
                    <Select placeholder="Select Catagory"onChange={(value)=>setCatagory(value)}>
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                    </Form.Item>
                    
                    <Form.Item label="Price" >
                    <InputNumber placeholder="Price"onChange={(value)=>setPrice(value)}/>
                    </Form.Item>
                    <Form.Item label="Quantity">
                    <InputNumber placeholder="Quantity"  onChange={(value)=>setQuantity(value)}/>
                    </Form.Item>
                    <Form.Item label="Add">
                    <Button onClick={add} style={{background:'#04204a',color:'white', fontWeight:'bolder'}}>Add Product</Button>
                    </Form.Item>
                    <h2 style={{color:'red'}}>{errorMessage}</h2>
                    <h2 style={{color:'green'}}>{success}</h2>
                </Form>
                </Col>
            </Row>
               
        </div>
    )
}
