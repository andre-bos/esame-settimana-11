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
                    <CardsRow/>
                    <CardsRow />
                  </Row>

                  <MediaPlayer />
              </Col>
          </Row>
        </Container>
    </>
  )
}
