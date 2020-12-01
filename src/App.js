import React, { useState } from 'react';
import './App.css';
import { Landing } from './components/Landing';
import { Header1 } from './components/Header';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { Products } from './components/Products';
import { Cart } from './components/Cart';
import { SearchResult } from './components/SearchResult';
import {Route,BrowserRouter} from 'react-router-dom';
import 'antd/dist/antd.css';
import { AdminPage } from './components/admin/AdminPage';
import { AddProduct } from './components/admin/AddProduct';
import { Products1 } from './components/admin/Products1';
import { Summary } from './components/admin/Summary';
import { Orders } from './components/admin/Orders';
import {Test} from './Test'
function App() {
  const [toggle, setToggle] = useState(false)
  const func=()=>{
    if(window.innerWidth<500)
    {
      setToggle(true)
      console.log("hkl")
    }
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/signup' component={Signup}/>
        <Route path='/login' component={Login}/>
        <Route path='/products' component={Products}/>
        <Route path='/'exact component={Landing}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/search' component={SearchResult}/>
        <Route path='/admin' component={AdminPage}/>
        <Route path='/addProduct' component={AddProduct}/>
        <Route path='/products1' component={Products1}/>
        <Route path='/summary' component={Summary}/>
        <Route path='/orders' component={Orders}/>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
