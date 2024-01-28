import React from 'react';
import {Col, Row} from "react-bootstrap";
import NextBtn from '../assets/playerbuttons/Next.png';
import PlayBtn from '../assets/playerbuttons/Play.png';
import PreviousBtn from '../assets/playerbuttons/Previous.png';
import RepeatBtn from '../assets/playerbuttons/Repeat.png';
import ShuffleBtn from '../assets/playerbuttons/Shuffle.png';


function MediaPlayer() {
    return (
        <>
            <Col className='d-flex p-0 g-0'>
                <Col className='me-3'>
                    <a href='#'>
                        <img className='img-fluid mb-2' src='http://placebeard.it/640/480' alt='Album cover'/>
                    </a>
                </Col>

                <Col>
                    <p className='m-0'><a href="#" className='card-link'>Album: Titolo Album</a></p>
                    <p className='m-0'><a href="#" className='card-link'>Artist: Nome artista</a></p>
                </Col>
            </Col>
            <Col></Col>
        </>
    );
}

export default MediaPlayer;