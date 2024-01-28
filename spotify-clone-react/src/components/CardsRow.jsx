import React from 'react';
import CardsRowTitle from "./CardsRowTitle";
import SingleCard from "./SingleCard";
import {Row} from "react-bootstrap";

function CardsRow({title}) {
    return (
        <>
        <CardsRowTitle titoloCards={title}/>
        <Row className='row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 mb-large'>
            <SingleCard />
        </Row>
        </>
    );
}

export default CardsRow;