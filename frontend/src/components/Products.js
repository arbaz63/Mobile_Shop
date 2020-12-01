import React from 'react'
import { Row,Col,Select,Button } from 'antd';
import {  ShoppingCartOutlined } from '@ant-design/icons';
import { Header1 } from './Header';
export const Products = () => {
    return (
        <div>
            <Header1/>
            <Row style={{padding:"10px"}}>
                <Col  span={8}>
                    <img src={require('../images/laptop.png')} width='100%' height='70%' alt=""/>
                </Col>
                <Col span={11}offset={1}>
                    <Row>
                        <Col>
                            <h1>Huawei Y7 2019 Dub-LX3 32GB Unlocked GSM LTE Android Phone w/Dual 13MP+2MP Camera - Midnight Black</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src={require('../images/5star.png')}width='200px'height='30px' alt="img"/>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'10px'}}>
                        <Col>
                            <h2>About this item</h2>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'10px'}}>
                        <Col>
                            <h3>
                            6.26-inch HD+ HUAWEI Dewdrop display (19:9, 1520 x 720)
CPU: Octa-core Qualcomm 450, GPU: Adreno 506, OS: EMUI 8.2, RAM: 3 GB, ROM: 32 GB (plus up to 512 GB expandable storage via micro SD, not standard)
Rear Camera: 13 MP + 2 MP (f/1.8) AI, Front Camera: 16 MP, 4000 mAh Battery
2G: B2/B3/B5/B8, 3G: B1/B2/B4/B5/B8, 4G: LTE B2/B4/B5/B7/B28
International Model, Does not have US Warranty. Will work with Most GSM SIM cards in U.S. and world Including AT&T, T-Mobile, Etc. Will NOT work with CDMA Carriers Such as Verizon, Sprint, Boost.</h3>
                        </Col>
                    </Row>
                </Col>
                <Col  style={{border:'1px solid black',padding:'10px',height:'80%'}} span={4}>
                    <Row>
                        <Col>
                            <h2 style={{color:'red'}}>$1500</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2 style={{color:'green'}}>In Stock</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Select placeholder="Quantity" style={{width:'200px'}}>
                                <Select.Option>1</Select.Option>
                                <Select.Option>2</Select.Option>
                                <Select.Option>3</Select.Option>
                                <Select.Option>4</Select.Option>
                                <Select.Option>5</Select.Option>
                                <Select.Option>6</Select.Option>
                            </Select>
                        </Col>
                    </Row>
                    <Row style={{marginTop:"10px"}}>
                        <Col >
                        <Button type="primary" icon={<ShoppingCartOutlined />} style={{width:'200px'}}>
                            Add to cart
                        </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
