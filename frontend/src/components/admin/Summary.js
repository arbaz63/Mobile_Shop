import React from 'react'
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
import { AdminHeader } from './AdminHeader';
export const Summary = () => {
    return (
        <div>
            <AdminHeader/>
            <Row>
                <Col offset={6}>
                    <h1>Summary</h1>
                </Col>
            </Row>
            <Row>
                <Col offset={8}span={3}>
                    <h2>March</h2>
                </Col>
                <Col span={3}>
                    <h2>24000</h2>
                </Col>
                <Col span={3}>
                    <button style={{width:'100px',background:'#04204a',color:'white', fontWeight:'bolder'}}>Details</button>
                </Col>
            </Row>
            <Row>
                <Col offset={8}span={3}>
                    <h2>April</h2>
                </Col>
                <Col span={3}>
                    <h2>150000</h2>
                </Col>
                <Col span={3}>
                    <button style={{width:'100px',background:'#04204a',color:'white', fontWeight:'bolder'}}>Details</button>
                </Col>
            </Row>
            <Row>
                <Col offset={8}span={3}>
                    <h2>May</h2>
                </Col>
                <Col span={3}>
                    <h2>520000</h2>
                </Col>
                <Col span={3}>
                    <button style={{width:'100px',background:'#04204a',color:'white', fontWeight:'bolder'}}>Details</button>
                </Col>
            </Row>
            <Row>
                <Col offset={8}span={3}>
                    <h2>June</h2>
                </Col>
                <Col span={3}>
                    <h2>24000</h2>
                </Col>
                <Col span={3}>
                    <button style={{width:'100px',background:'#04204a',color:'white', fontWeight:'bolder'}}>Details</button>
                </Col>
            </Row>
        </div>
    )
}
