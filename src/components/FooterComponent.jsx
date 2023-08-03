import { Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";

function FooterComponent() {
    return (
        <Row style={{ display: "flex", justifyContent: "center", textAlign: 'center' }}>
            <Paragraph
                style={{ cursor: "pointer" }}
                onClick={() => { window.location.href = "https://blog.kohepets.com.sg/fun-interesting-facts-you-never-knew-about-your-dog/amp/?gclid=CjwKCAjw_aemBhBLEiwAT98FMql67IT2MLKqyoVEsyfzZHkwyeVcH6qgqapJd3A_xT9bN5Ylk15RmBoCcEkQAvD_BwE" }}
            >If you like dogs instead, click here!</Paragraph>
        </Row>
    );
}

export default FooterComponent;