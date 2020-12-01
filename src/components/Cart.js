import React from 'react'
import { Row,Col,Select,Button } from 'antd';
import { Header1 } from './Header';

export const Cart = () => {
    return (
        <div>
            <Header1/>
            <Row>
                <Col span={18}>
                    <Row style={{padding:"10px"}}>
                    <Col  offset={4}span={3}>
                        <img src={require('../images/acer3.jpg')} width='150px' height='150px' alt=""/>
                    </Col>
                    <Col offset={1}span={11} style={{borderBottom:'1px solid black'}}>
                        <Row>
                            <Col>
                                <h1>
                                Acer Aspire 1 A115-31-C2Y3, 15.6" Full HD Display, Intel Celeron N4020, 4GB DDR4
                                </h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <img src={require('../images/4star.png')}width='150px'height='20px' alt="img"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h2 style={{color:'red'}}>$2200</h2>
                            </Col>
                            <Col offset={17}>
                                <Button style={{marginBottom:'10px'}}type='danger'>Remove from cart</Button>
                            </Col>
                        </Row>
                    </Col>    
                </Row>
                <Row style={{padding:"10px",}}>
                    <Col  offset={4}span={3}>
                        <img src={require('../images/acer2.jpg')} width='150px' height='150px' alt=""/>
                    </Col>
                    <Col offset={1}span={11} style={{borderBottom:'1px solid black'}}>
                        <Row>
                            <Col>
                                <h1>
                                Acer Swift 3 Thin  Light Laptop, 14" Full HD IPS, AMD Ryzen 7 4700U Octa-Core
                                </h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <img src={require('../images/5star.png')}width='150px'height='20px' alt="img"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h2 style={{color:'red'}}>$1800</h2>
                            </Col>
                            <Col offset={17}>
                                <Button style={{marginBottom:'10px'}}type='danger'>Remove from cart</Button>
                            </Col>
                        </Row>
                    </Col>    
                </Row>
                </Col>
                <Col style={{border:'1px solid black',height:'100%',padding:'10px'}}>
                    <Row >
                        <Col>
                            <h1 style={{color:'red',fontWeight:'bolder'}}>Total amount:</h1>
                        </Col>
                        <Col>
                            <h1>$4000</h1>
                        </Col>
                    </Row>
                    <Row>
                         <Col>
                            <Button style={{background:'#faa60a',color:'white',fontWeight:'bolder'}}>Checkout</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            
            
        </div>
    )
}
