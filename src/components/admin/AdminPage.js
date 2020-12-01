import React from 'react'
import { Card } from 'antd';
import { AdminHeader } from './AdminHeader';
export const AdminPage = () => {
    return (
        <div>
            <AdminHeader/>
            <div className="site-card-border-less-wrapper">
                <Card  bordered={false} style={{ width: 300,margin:'0px auto' }}>
                    <a href="/AddProduct"><button style={{width:'300px',height:'80px',background:'#04204a',color:'white', fontWeight:'bolder'}}>Add Product</button></a>
                </Card>
                <Card  bordered={false} style={{ width: 300,margin:'0px auto' }}>
                    <a href="/orders"><button style={{width:'300px',height:'80px',background:'#04204a',color:'white', fontWeight:'bolder'}}>View Orders</button></a>
                </Card>
                <Card  bordered={false} style={{ width: 300,margin:'0px auto' }}>
                    <a href="/products1"><button style={{width:'300px',height:'80px',background:'#04204a',color:'white', fontWeight:'bolder'}}>View Products</button></a>
                </Card>
                <Card  bordered={false} style={{ width: 300,margin:'0px auto' }}>
                    <a href="/summary"><button style={{width:'300px',height:'80px',background:'#04204a',color:'white', fontWeight:'bolder'}}>Summary</button></a>
                </Card>
            </div>
        </div>
    )
}
