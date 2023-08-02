import { Card, Col, Image, Row } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import React from 'react';

function CatItem( { itemProp } ) {
    return (
        <Card  bordered={false} style={{ marginBottom: "20px" }}>
            <Row gutter={16} style={{display:"flex"}}>
                <Col lg={24} md={24} style={{marginTop:"10px"}}>
                    <Paragraph>{itemProp.text}</Paragraph>
                </Col>
            </Row>
        </Card>
    );
}

export default CatItem;