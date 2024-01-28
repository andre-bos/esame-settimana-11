import React from 'react'
import {Button, Card, Col, Container, Row} from 'react-bootstrap'
import Sidebar from '../components/Sidebar'
import MainNav from '../components/MainNav'
import CardsRow from "../components/CardsRow";
import MediaPlayer from "../components/MediaPlayer";

export default function Homepage() {
  return (
    <>
        <Container fluid className='p-0'>
          <Row>
              <Col xs={2}>
                  <Sidebar />
              </Col>

              <Col xs={10} className='p-0'>

                  <Row className='mt-3'>
                    <MainNav />
                  </Row>

                  <Row className='ms-5 mt-5'>
                    <CardsRow title='I grandi successi'/>
                    <CardsRow title='Le tue hit' />
                  </Row>

                  <Row style={{backgroundColor: '#282828', height: '130px', maxWidth: '100vw'}} className='fixed-bottom'>
                      <MediaPlayer />
                  </Row>
              </Col>
          </Row>
        </Container>
    </>
  )
}
