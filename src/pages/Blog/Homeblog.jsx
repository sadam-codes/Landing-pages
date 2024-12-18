import React from 'react'
import { Container , Row } from 'react-bootstrap'
import myop from "../../All-images/myop.png";
import belimo from "../../All-images/belimo.png";
import life from "../../All-images/life.png";
import grabyo from "../../All-images/grabyo.png";
import cirtrus from "../../All-images/cirtrus.png";
import trustly from "../../All-images/trustly.png";



function Homeblog() {
  return (
    <div style={{background:'whitesmoke', }}>
    <Container>
    <Row>
    <div style={{padding: '15px 0px', display:'flex' }}>
    <div><img className='myop <Col xl="2" md="3 col-6' src={myop} alt="Redditimage"  /></div>
    <div><img className='myop <Col xl="2" md="3 col-6' src={belimo} alt="belimo"  /></div>
    <div><img className='myop <Col xl="2" md="3 col-6' src={life} alt="life"  /></div>
    <div><img className='myop <Col xl="2" md="3 col-6' src={grabyo} alt="grabyo"  /></div>
    <div><img className='myop <Col xl="2" md="3 col-6' src={cirtrus} alt="cirtrus"  /></div>
    <div><img className='myop <Col xl="2" md="3 col-6' src={trustly} alt="trustly"  /></div>
   </div> 
   </Row>         
    </Container>
    </div>
  )
}

export default Homeblog
