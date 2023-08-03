import { Button } from "antd";

function CustomButton( props ) {
    const { handleClickProp, titleProp } = props
    return (
        <Button
            type='primary'
            style={{ width: "35%", marginTop: "20px" }}
            onClick={() => handleClickProp()}
        >
           {titleProp}
        </Button>
    );
}

export default CustomButton;