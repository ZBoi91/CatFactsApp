import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Cat from '../assets/home-cat.jpg'
import CustomButton from '../components/CustomButton'
import Paragraph from 'antd/es/typography/Paragraph'
import Title from 'antd/es/typography/Title'
import { Content } from 'antd/es/layout/layout'
import { Col, Image, Layout, Row } from 'antd'

const Facts = () => {
    return (
        <Layout>
            <Navbar/>

            <Content
                 style={{ textAlign: 'center', display: "flex" }} >
                    <Col lg={12} sm={24} style={{ marginTop: "100px" }}>
                        <Title level={2}>Welcome to Cat Facts!</Title>
                        <Paragraph>
                            Facto about catto! Number1:
                            Owning a cat can reduce the risk of stroke and heart attack by a third.

                            Facto about catto! Number2:
                            Most cats are lactose intolerant, and milk can cause painful stomach cramps and diarrhea. It's best to forego the milk and just give your cat the standard: clean, cool drinking water.

                            Facto about catto! Number3:
                            Domestic cats spend about 70 percent of the day sleeping and 15 percent of the day grooming.

                            Facto about catto! Number4:
                            The frequency of a domestic cat's purr is the same at which muscles and bones repair themselves.

                            Facto about catto! Number5:
                            Cats are the most popular pet in the United States: There are 88 million pet cats and 74 million dogs.

                        </Paragraph>
                        <CustomButton />
                    </Col>
                    <Col lg={12}>
                        <Image
                            width={"100%"}
                            src={Cat}
                        />
                    </Col>
                </Content>
           
        </Layout>

    )
}

export default Facts;