import { Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";

function FooterComponent() {
    return (
        <Row style={{ display: "flex", justifyContent: "center", textAlign: 'center' }}>
            <Paragraph
                style={{ cursor: "pointer" }}
                onClick={() => { window.location.href = "https://www.google.com" }}
            >If you like dogs instead, click here!</Paragraph>
        </Row>
    );
}

export default FooterComponent;