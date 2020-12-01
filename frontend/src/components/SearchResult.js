import React from 'react'
import { Row,Col,Select,Button } from 'antd';
import {  ShoppingCartOutlined } from '@ant-design/icons';
import { Header1 } from './Header';
export const SearchResult = () => {
    return (
        <div>
            <Header1/>
            <Row>
                <Col offset={6}>
                    <h1>Search results are</h1>
                </Col>
            </Row>
            <Row style={{margin:'10px'}}>
                <Col span={4}offset={12}>
                    <Select placeholder="Filter"style={{width:'100%'}}>
                        <Select.Option>Price</Select.Option>
                        <Select.Option>Rating</Select.Option>
                    </Select>
                </Col>
                <Col span={4}>
                    <Select placeholder="Sort by Price"style={{width:'100%'}}>
                        <Select.Option>Lowest to Highest</Select.Option>
                        <Select.Option>Highest to Lowest</Select.Option>
                    </Select>
                </Col>
            </Row>
            <Row style={{padding:"10px",}}>
                <Col  offset={6}span={3}>
                    <img src={require('../images/acer1.jpg')}width='150px' height='150px' alt=""/>
                </Col>
                <Col span={11} style={{borderBottom:'1px solid black'}}>
                    <Row>
                        <Col>
                            <h1>
                            Huawei Y7 2019 Dub-LX3 32GB Unlocked GSM LTE Android Phone w/Dual 13MP+2MP Camera - Midnight Black
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
                    </Row>
                </Col>    
            </Row>
            <Row style={{padding:"10px",}}>
                <Col  offset={6}span={3}>
                    <img src={require('../images/laptop.png')} width='150px' height='150px' alt=""/>
                </Col>
                <Col span={11} style={{borderBottom:'1px solid black'}}>
                    <Row>
                        <Col>
                            <h1>
                            Huawei Mate 8 Unlocked Smartphone with 16 MP camera, 4 GB RAM, 64 GB Memory Dual Sim, No Warranty - International Version (Gold)
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src={require('../images/4.5star.png')}width='150px'height='20px' alt="img"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2 style={{color:'red'}}>$1650</h2>
                        </Col>
                    </Row>
                </Col>    
            </Row>
            <Row style={{padding:"10px",}}>
                <Col  offset={6}span={3}>
                    <img src={require('../images/acer3.jpg')} width='150px' height='150px' alt=""/>
                </Col>
                <Col span={11} style={{borderBottom:'1px solid black'}}>
                    <Row>
                        <Col>
                            <h1>
                            Huawei Y5 2019 AMN-LX3 Dual SIM 32GB+2GB RAM 5.71" Display Factory Unlocked (International Version) (Sapphire Blue)
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
                            <h2 style={{color:'red'}}>$1799</h2>
                        </Col>
                    </Row>
                </Col>    
            </Row>
            <Row style={{padding:"10px",}}>
                <Col  offset={6}span={3}>
                    <img src={require('../images/acer2.jpg')} width='150px' height='150px' alt=""/>
                </Col>
                <Col span={11} style={{borderBottom:'1px solid black'}}>
                    <Row>
                        <Col>
                            <h1>
                            Huawei Mate 8 NXT-L09 32GB 6-Inch 4G LTE Factory Unlocked Smartphone - International Stock No Warranty (Space Gray)
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
                            <h2 style={{color:'red'}}>$2200</h2>
                        </Col>
                    </Row>
                </Col>    
            </Row>
            
        </div>
    )
}
