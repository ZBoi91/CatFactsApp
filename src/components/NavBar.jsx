import React from 'react';
import logo from '../../assets/logo.png'
import './Navbar.css'
import ReactDOM from "react-dom";

const Navbar = ( { navBar } ) => (
    <Header
        style={{
            position: 'sticky',
            top: 0,
            Index: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            background: "white",
            borderBottom: "1px solid rgb(222, 217, 217)"
        }}
    >
        <div className="demo-logo" >
            <img width="100px" height="70px" src={logo} alt="catshow" />
        </div>
        <Menu mode="horizontal"  style={{ lineHeight: '64px', width: '100%' }}>
            <Menu.Item key="home">
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="facts">
                <Link to="/facts">Facts</Link>
            </Menu.Item>
        </Menu>
    </Header>
);

export default Navbar