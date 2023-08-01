import { Button } from "antd";

function CustomButton( props ) {
    return (
        <Button
            type='primary'
            style={{ width: "35%", marginTop: "20px" }}
        >
            Discover More
        </Button>
    );
}

export default CustomButton;