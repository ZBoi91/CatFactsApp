import { Col, Image, Layout, Row } from 'antd'
import { Content } from 'antd/es/layout/layout'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import Paragraph from 'antd/es/typography/Paragraph'
import Title from 'antd/es/typography/Title'
import { useNavigate } from 'react-router-dom'
import CustomButton from '../components/CustomButton'
import FooterComponent from '../components/FooterComponent'

const Home = () => {
    const [image, setImage] = useState( "" )
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://cataas.com/cat");
            if (!response.ok) { 
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            setImage(imageUrl);
        };
    
        fetchData().catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
    }, []);
    const navigate = useNavigate();
    const handleClick = () => {
        // console.log('hi==');
        navigate( "/facts" )
    }
    return (
        <Layout>
            <Navbar />

            <Content className="site-layout" style={{ padding: '0 50px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                <Row style={{ textAlign: 'center', display: "flex" }} >
                    <Col lg={12} sm={24} style={{ marginTop: "100px" }}>
                        <Title level={2}>Welcome to Catto Facto!</Title>
                        <Paragraph>
                            Cats are fascinating and independent creatures, known for their graceful movements, sharp senses, and enigmatic personalities. With sleek fur and captivating eyes, they exude an air of mystery and wisdom, often displaying a mix of playfulness and aloofness. Cats have a long history of companionship with humans, forming strong bonds with those they trust while maintaining their innate sense of self-reliance. Revered in various cultures, these creatures add wonder and enchantment to our lives, whether as cherished pets in homes or skilled hunters in rural settings, embodying the intriguing balance between untamed wilderness and domestic serenity.
                        </Paragraph>
                        <CustomButton 
                        titleProp={"Discover More"}
                        handleClickProp={handleClick} />
                    </Col>
                    <Col lg={12}>
                        <Image
                            width={"100%"}
                            src={image}
                            height={"400px"}
                        />
                    </Col>
                </Row>
            </Content>
            <FooterComponent/>
        </Layout>

    )
}

export default Home