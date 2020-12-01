import React from 'react'
import { Layout, Menu,Input, Row,Col} from 'antd';


const { SubMenu } = Menu;
const { Header } = Layout;
export const Header1 = () => {
    return (
        <div>
             <div  style={{padding:'10px',background:'#04204a'}}>
                 <Row>
                     <Col offset={16}>
                        <a href="/products"><h2 style={{color:'white',fontWeight:'bolder'}}>Product page | </h2></a>
                     </Col>
                     <Col span={4}>
                        <a href="/search"><h2 style={{color:'white',fontWeight:'bolder',marginLeft:'5px'}}>Search results page</h2></a>
                     </Col>                     
                 </Row>
                 <Row>
                     <Col span={2}>
                        <a href="/"><img width='100px' height='50px'src={require('../images/logo.png')} alt="img"/></a>
                     </Col>
                     <Col span={2}offset={1}>
                        <h1 style={{color:'white',fontWeight:'bolder'}}>E-shop</h1>
                     </Col>
                     <Col span={11}>
                        <Input.Search size="small" style={{width:'600px',height:'50px'}} placeholder="Search an item" />
                     </Col>
                     <Col span={2}>
                        <a href="/signup"><h1 style={{color: 'white',fontWeight:'bolder'}}> Sign Up</h1></a> 
                     </Col>
                     <Col span={2}>
                        <a href="/login"><h1 style={{color: 'white',fontWeight:'bolder'}}> Login</h1></a> 
                     </Col>
                     <Col span={1}>
                        <a href="/admin"><h1 style={{color: 'Red',fontWeight:'bolder'}}> Admin</h1></a> 
                     </Col>
                     <Col span={2} offset={1}>
                       <a href="/cart"><img src={require('../images/cart.png')} width="50px"height="50px"alt="cart"/></a> 
                     </Col>
                 </Row>
                 

            </div>
        </div>
    )
}
