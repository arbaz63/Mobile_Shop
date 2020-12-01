import React,{useState} from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {  LaptopOutlined, HomeOutlined ,PrinterOutlined } from '@ant-design/icons';
import { Card,Row,Col } from 'antd';
import { Header1 } from './Header';

const { SubMenu } = Menu;
const {  Content, Sider } = Layout;

const { Meta } = Card;
export const Landing = () => {
    const [isAdded, setIsAdded] = useState(false)
    const [message, setMessage] = useState('Add to Stock')
    const addToStock=()=>{
        setIsAdded(true)
    }
    const outOfStock=()=>{
        setMessage('Out of Stock')
    }
    return (
        <div>
            <Header1/>
            <Layout>
               
                <Layout>
                    <Sider width={300} className="site-layout-background">
                        <Menu
                        mode="inline"
                        style={{ height: '100%', borderRight: 0 }}
                        >
                        <SubMenu key="sub1"  title="Huawei">
                            <Menu.Item key="1">Accessories and Supplies</Menu.Item>
                            <Menu.Item key="2">Camera and Photo</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title="Samsung">
                            <Menu.Item key="5">Components</Menu.Item>
                            <Menu.Item key="6">Mobile and Tablets</Menu.Item>
                            <Menu.Item key="7">Camera</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub" title="Vivo">
                            <Menu.Item key="9">$G</Menu.Item>
                            <Menu.Item key="10">New</Menu.Item>
                            <Menu.Item key="11">Used</Menu.Item>
                        </SubMenu>
                        </Menu>
                    </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            
                            <Content
                            className="site-layout-background"
                            style={{
                                padding: 10,
                                margin: 0,
                                minHeight: 280,
                            }}
                            >
                                
                                <Row>
                                    <Col ><h2 style={{fontWeight:'bolder',color:'red'}}>Featured Products</h2></Col>
                                </Row>
                                <Row>
                                    <Col span={6}>
                                        <Card
                                            hoverable
                                            style={{ width: 240,background:'#faa60a'}}
                                            cover={<img alt="example" src={require('../images/battery.jpg')} width='80%'height='200px'/>}
                                        >
                                            <Meta title="Huawei p30"/>
                                            <s style={{color:'red',fontWeight:'bolder'}}>$20</s> 
                                            <div style={{display:'flex'}}>
                                                <h2>$15</h2>
                                                <h4 style={{marginLeft:'85px',color:'green',fontWeight:'bolder'}}> In stock</h4>
                                            </div>
                                            <button onClick={addToStock} style={{width:'200px',background:'#04204a',color:'white', fontWeight:'bolder'}}>{isAdded?'Added To Stock':'Add to Stock'}</button>
                                            
                                        </Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card
                                            hoverable
                                            style={{ width: 240,background:'#faa60a'}}
                                            cover={<img alt="example" src={require('../images/acer1.jpg')}width='80%'height='200px' />}
                                        >
                                            <Meta title="Vivo v20" />
                                            <s style={{color:'red',fontWeight:'bolder'}}>$2000</s> 
                                            <div style={{display:'flex'}}>
                                                <h2>$1800</h2>
                                                <h4 style={{marginLeft:'45px',color:'red',fontWeight:'bolder'}}> Out of stock</h4>
                                            </div>
                                            <button onClick={outOfStock}style={{width:'200px',background:'#04204a',color:'white', fontWeight:'bolder'}}>{message}</button>
                                        </Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card
                                            hoverable
                                            style={{ width: 240,background:'#faa60a'}}
                                            cover={<img alt="example" src={require('../images/doorL.jpg')} width='80%'height='200px'/>}
                                        >
                                            <Meta title="Samsung a51" />
                                            <s style={{color:'red',fontWeight:'bolder'}}>$100</s> 
                                            <div style={{display:'flex'}}>
                                                <h2>$75</h2>
                                                <h4 style={{marginLeft:'85px',color:'green',fontWeight:'bolder'}}> In stock</h4>
                                            </div>
                                            <button style={{width:'200px',background:'#04204a',color:'white', fontWeight:'bolder'}}>Add to Stock</button>
                                        </Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card
                                            hoverable
                                            style={{ width: 240,background:'#faa60a'}}
                                            cover={<img alt="example" src={require('../images/powerB.jpg')}width='80%'height='200px' />}
                                        >
                                            <Meta title="Oppo f11" />
                                            <s style={{color:'red',fontWeight:'bolder'}}>$20</s> 
                                            <div style={{display:'flex'}}>
                                                <h2>$12</h2>
                                                <h4 style={{marginLeft:'85px',color:'green',fontWeight:'bolder'}}> In stock</h4>
                                            </div>
                                            <button style={{width:'200px',background:'#04204a',color:'white', fontWeight:'bolder'}}>Add to Stock</button>
                                        </Card>
                                    </Col>
                                </Row>
                            </Content>
                        </Layout>
                    </Layout>
            </Layout>
                            <Row>
                                <Col offset={10}>
                                    <h1 style={{color:'red',fontWeight:'bolder'}}>Most Popular Catagories</h1>
                                </Col>
                            </Row>
                            <Row>

                                <Col span={5}offset={2}> 
                                <Card
                                            hoverable
                                            style={{ width: 240,background:'#faa60a'}}
                                            cover={<img alt="example" src={require('../images/clothing.jpg')} width='80%'height='200px'/>}
                                        >
                                            <Meta title="Apple"/>
                                            
                                        </Card>
                                </Col>
                                <Col span={5}> 
                                <Card
                                            hoverable
                                            style={{ width: 240,background:'#faa60a'}}
                                            cover={<img alt="example" src={require('../images/toys.jpg')} width='80%'height='200px'/>}
                                        >
                                            <Meta title="Real me"/>
                                            
                                        </Card>
                                </Col>
                                <Col span={5}> 
                                <Card
                                            hoverable
                                            style={{ width: 240,background:'#faa60a'}}
                                            cover={<img alt="example" src={require('../images/babies.jpg')} width='80%'height='200px'/>}
                                        >
                                            <Meta title="Oppo"/>
                                            
                                        </Card>
                                </Col>
                                <Col span={5}> 
                                <Card
                                            hoverable
                                            style={{ width: 240,background:'#faa60a'}}
                                            cover={<img alt="example" src={require('../images/accessories.jpg')} width='80%'height='200px'/>}
                                        >
                                            <Meta title="Nokia"/>
                                            
                                        </Card>
                                </Col>
                            </Row>
        </div>
    )
}
