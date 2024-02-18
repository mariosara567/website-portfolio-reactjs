import { Container, Row, Col } from 'react-bootstrap';
import HeroImage from '../assets/img/hero.svg'

const AboutMePage = () => {
  return (
    <div className='aboutme-page'>
      <div className='w-100 min-vh-100 d-flex align-items-center'>
        <Container>
          <Row className='d-flex align-item-center pt-lg-5'>
            <Col lg="6" className='pt-lg-0 pt-5'>
              <img src={HeroImage} alt="hero-img" />
            </Col>
            <Col lg="6">
              <h1>The journey to relaxation</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum accusantium omnis natus voluptas pariatur dignissimos deserunt delectus iusto officiis nostrum!</p>
            </Col>
          </Row>
          <Row className='d-flex align-item-center pt-lg-5'>
            <Col lg="6">
              <h1>The journey to relaxation</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum accusantium omnis natus voluptas pariatur dignissimos deserunt delectus iusto officiis nostrum!</p>
            </Col>
            <Col lg="6" className='pt-lg-0 pt-5'>
              <img src={HeroImage} alt="hero-img" />
            </Col>
          </Row>
          <Row className='d-flex align-item-center pt-lg-5'>
            <Col lg="6" className='pt-lg-0 pt-5'>
              <img src={HeroImage} alt="hero-img" />
            </Col>
            <Col lg="6">
              <h1>The journey to relaxation</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum accusantium omnis natus voluptas pariatur dignissimos deserunt delectus iusto officiis nostrum!</p>
            </Col>
          </Row>
          <Row>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsam aliquam neque, eaque, tempore ex asperiores repudiandae dolor consequuntur dolorum culpa voluptatibus nemo animi voluptatem doloremque dolores aut, sequi quisquam!
            </p>
            <h1> | Eklesia Roderna S</h1>
          </Row>
        </Container>
      </div>

    </div>
  )
}

export default AboutMePage