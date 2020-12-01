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
export const Orders = () => {
    return (
        <div>
            <AdminHeader/>
            <Row>
                <Col offset={6}>
                    <h1>Orders</h1>
                </Col>
            </Row>
            <Row>
                <Col offset={6} span={16}>
                    <Row>
                        <Col offset={6}>
                            <h1 style={{color:'green'}}>Order Status: completed</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={6}>
                            <h1>Order Date: 20/06/2020</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={6}>
                            <h1>Order Total: 2500</h1>
                        </Col>
                        <Col offset={6}>
                            <button style={{width:'100px',background:'#04204a',color:'white', fontWeight:'bolder'}}>Details</button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* second order */}
            <Row>
                <Col offset={6} span={16}>
                    <Row>
                        <Col offset={6}>
                            <h1>Order Status: Pending</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={6}>
                            <h1>Order Date: 20/06/2020</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={6}>
                            <h1>Order Total: 2500</h1>
                        </Col>
                        <Col offset={6}>
                            <button style={{width:'100px',background:'#04204a',color:'white', fontWeight:'bolder'}}>Details</button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col offset={6} span={16}>
                    <Row>
                        <Col offset={6}>
                            <h1>Order Status: pending</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={6}>
                            <h1>Order Date: 20/06/2020</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={6}>
                            <h1>Order Total: 2500</h1>
                        </Col>
                        <Col offset={6}>
                            <button style={{width:'100px',background:'#04204a',color:'white', fontWeight:'bolder'}}>Details</button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col offset={6} span={16}>
                    <Row>
                        <Col offset={6}>
                            <h1>Order Status: Pending</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={6}>
                            <h1>Order Date: 20/06/2020</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={6}>
                            <h1>Order Total: 2500</h1>
                        </Col>
                        <Col offset={6}>
                            <button style={{width:'100px',background:'#04204a',color:'white', fontWeight:'bolder'}}>Details</button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
