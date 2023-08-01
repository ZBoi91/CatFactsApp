import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Cat from '../assets/home-cat.jpg'
import CustomButton from '../components/CustomButton'
import Paragraph from 'antd/es/typography/Paragraph'
import Title from 'antd/es/typography/Title'
import { Content } from 'antd/es/layout/layout'
import { Col, Image, Layout, Row } from 'antd'

const Home = () => {
    return (
        <Layout>
            <Navbar/>

            <Content className="site-layout" style={{ padding: '0 50px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                <Row style={{ textAlign: 'center', display: "flex" }} >
                    <Col lg={12} sm={24} style={{ marginTop: "100px" }}>
                        <Title level={2}>Welcome to Cat Facts!</Title>
                        <Paragraph>
                            Here, you'll find all sorts of interesting facts about cats. From their behavior to their history, we cover it all. Get ready to explore the fascinating world of cats!
                        </Paragraph>
                        <CustomButton />
                    </Col>
                    <Col lg={12}>
                        <Image
                            width={"100%"}
                            src={Cat}
                        />
                    </Col>
                </Row>
            </Content>
        </Layout>

    )
}

export default Home