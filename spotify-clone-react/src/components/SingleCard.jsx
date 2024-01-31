import React from 'react';
import {Col} from "react-bootstrap";

function SingleCard({data}) {
    return (
        <>
            <Col className='text-center'>
                <a href='#'>
                    <img className='img-fluid mb-2' src={data.album.cover_medium} alt={data.album.title} />
                </a>

                <p className='m-0'><a href="#" className='card-link'>Album: {data.album.title}</a></p>
                <p className='m-0'><a href="#" className='card-link'>Artist: {data.artist.name}</a></p>
            </Col>
        </>
    );
}

export default SingleCard;