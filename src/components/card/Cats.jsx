import React from 'react';
import CatItem from './CatItem';

function Cats({dataProp}) {
    return (
        <div style={{ width: "100%" }}>
            {dataProp.map(  cat => {
                return <CatItem itemProp={cat} />
            } )}
        </div>

    );
}

export default Cats;