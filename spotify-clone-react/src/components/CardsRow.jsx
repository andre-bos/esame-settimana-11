import React from 'react';
import CardsRowTitle from "./CardsRowTitle";
import SingleCard from "./SingleCard";
import {Row} from "react-bootstrap";
import {useSelector} from "react-redux";

function CardsRow() {

    const risultatiRicerca = useSelector(state => state.searchData.searchResults)
    console.log(risultatiRicerca)

    return (
        <>
        <CardsRowTitle/>
        <Row className='row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 mb-large'>
            {risultatiRicerca.data.slice(0, 4).map(
                (ele, index) => <SingleCard key={index} data={ele} />
            )}
        </Row>
        </>
    );
}

export default CardsRow;