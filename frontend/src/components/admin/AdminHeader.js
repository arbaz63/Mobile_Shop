import React from 'react'
import { Layout, Menu,Input, Row,Col} from 'antd';


const { SubMenu } = Menu;
const { Header } = Layout;
export const AdminHeader = () => {
    return (
        <div style={{marginBottom:'10px'}}>
        <div  style={{padding:'10px',background:'#04204a'}}>
            
            <Row>
                <Col span={2}>
                   <a href="/"><img width='100px' height='50px'src={require('../../images/logo.png')} alt="img"/></a>
                </Col>
                <Col span={2}offset={1}>
                   <h1 style={{color:'white',fontWeight:'bolder'}}>E-shop</h1>
                </Col>
                <Col span={12}offset={1}>
                  <a href='/admin'> <h1 style={{color:'white',fontWeight:'bolder'}}>Admin Panel</h1></a>
                </Col>
                <Col span={2}>
                   <a href="/"><h1 style={{color: 'white',fontWeight:'bolder'}}> Logout</h1></a> 
                </Col>
               
            </Row>
            

       </div>
   </div>
    )
}
