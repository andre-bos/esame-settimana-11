import React from 'react';
import {Row} from "react-bootstrap";

function CardsRowTitle({titoloCards}) {
    return (
        <>
            <h2 className='titolo-cards mb-3'>{titoloCards}</h2>
        </>
    );
}

export default CardsRowTitle;