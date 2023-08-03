import React from 'react';
import logo from '../../assets/logo.png'
import './Navbar.css'
import { Link } from "react-router-dom";
import { Header } from "antd/es/layout/layout";
import { Menu } from "antd";
const Navbar = () => (
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
        <div className="demo-logo">
        <Link to="/">
            <img width="100px" height="70px" src={logo}/>
            </Link>
        </div>
        <Menu mode="horizontal"  style={{ lineHeight: '64px', width: '100%' }}>
            <Menu.Item key="home">
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="Facts">
                <Link to="/Facts">Facts</Link>
            </Menu.Item>
        </Menu>
    </Header>
);

export default Navbar