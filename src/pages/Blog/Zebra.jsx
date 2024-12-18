import React from 'react'
import { Container } from 'react-bootstrap'
import zebra from "../../All-images/zebra.png";
import Backimage from '../../components/Landingpage1/Backimage';
import Client from '../components2/Client';
import Footer from '../../components/Landingpage1/Footer';
function Zebra() {
  return (
                    <>
    <Container>
    <div className='zebra'>
    <img className='zebra-image' src={zebra} alt="zebra"  />
    </div>
    </Container>
    <div>
        <Backimage />
        <div style={{ paddingTop: "40px" }}>
          <Client />
        </div>
        <Footer />
        
      </div>
      </>
  )
}

export default Zebra
