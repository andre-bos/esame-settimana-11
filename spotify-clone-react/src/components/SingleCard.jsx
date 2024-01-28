import React from 'react';
import {Col} from "react-bootstrap";

function SingleCard() {
    return (
        <>
            <Col className='text-center'>
                <a href='#'>
                    <img className='img-fluid mb-2' src='http://placebeard.it/640/480' alt='Album cover' />
                </a>

                <p className='m-0'><a href="#" className='card-link'>Album: Titolo Album</a></p>
                <p className='m-0'><a href="#" className='card-link'>Artist: Nome artista</a></p>
            </Col>
        </>
    );
}

export default SingleCard;