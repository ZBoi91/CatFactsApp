import React, { useEffect, useState } from 'react';
import Cats from '../components/card/Cards';
import { Layout, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import Navbar from '../components/navbar/Navbar';

const Cat = () => {
    const [data, setData] = useState( [] )

    const fetchData = async () => {
        const response = await fetch("https://cat-fact.herokuapp.com/facts");
        const data = await response.json();
        console.log("response", data);
        setData(data);
    };

    useEffect(() => {        
        fetchData();
    }, []);

    return (
        <Layout>
            <Navbar />
            <Content className="site-layout" style={{ padding: '20px 50px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100px' }}>
                <Row style={{ textAlign: 'center' }}>
                    <Cats dataProp={data}/>
                </Row>
            </Content>
        </Layout>
    );
}

export default Cat;