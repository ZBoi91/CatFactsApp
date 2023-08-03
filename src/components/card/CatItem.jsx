import { Card, Col, Image, Row } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import React, { useEffect, useState } from 'react';

function CatItem({itemProp}) {
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
    return ( 
    <Card  bordered={false} style={{ marginBottom: "20px" }}>
            <Row gutter={16} style={{display:"flex"}}>
               <Col lg={12} md={12} sm={12}>
                <Paragraph>{itemProp.text}</Paragraph>
                </Col>
                <Col lg={10} md={12} sm={12}>
                    <Image src={image} alt="Random images" width={"200px"} height={"200px"}/>
                </Col>
            </Row>
        </Card>
    )
}


export default CatItem