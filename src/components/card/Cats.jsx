import React from 'react';
import CatItem from './CatItem';

function Cats( { dataProp } ) {
    return (
        <div style={{ width: "100%" }}>
            {dataProp.map( rec => {
                return <CatItem itemProp={rec} />
            } )}
        </div>

    );
}

export default Cats;