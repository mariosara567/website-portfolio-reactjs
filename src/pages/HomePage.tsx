import { Container, Row, Col } from 'react-bootstrap'
import HeroImage from '../assets/img/hero.svg';

import { bukuTerbaru, dataSwiper } from "../data/index"
import { useNavigate, Link } from "react-router-dom"
import FaqComponent from "../components/FaqComponent"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const HomePage = () => {
  let navigate = useNavigate()

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className='header-box d-flex align-items-center pt-lg-5'>
            <Col lg="6">
              <h1 className='mb-4'>
                Ekklesia<br /> <span>Roderna S</span>
              </h1>
              <p className='mb-4'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos error cum fuga totam debitis nulla.
              </p>
              <button className='btn btn-primary btn-lg rounded-1 me-2 mb-xs-0 mb-2'>
                <a href="#books" className='text-white text-decoration-none'>My Books</a>
              </button>
              <button className='btn btn-outline-primary btn-lg rounded-1 mb-xs-0 mb-2'>
              <Link to="/aboutme" className="text-primary text-decoration-none">About Me</Link>
              </button>
            </Col>
            <Col lg="6" className='pt-lg-0 pt-5'>
              <img src={HeroImage} alt="hero-img" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="books w-100 min-vh-100" id='books'>
        <Container>
          <Row>
            <Col>
              <h1 className='text-center fw-bold'>My Books</h1>
              <p className='text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam reiciendis aut, aliquam ab omnis modi?
              </p>
            </Col>
          </Row>
          <Row>
            {bukuTerbaru.map((books) => {
              return <Col key={books.id} className="shadow rounded">
                <img src={books.image} alt="new books" className='w-100 mb-5 rounded-top' />
                <div className='star mb-2 px-3'>
                  <i className={books.star1}></i>
                  <i className={books.star2}></i>
                  <i className={books.star3}></i>
                  <i className={books.star4}></i>
                  <i className={books.star5}></i>
                </div>
                <h5 className='mb-5 px-3'>{books.title}</h5>
                <div className='ket d-flex justify-content-between align-item-center px-3 pb-3'>
                  <p className='m-0 text-primary fw-bold'>{books.price}</p>
                  <button className='btn btn-primary rounded-1'>{books.buy}</button>
                </div>
              </Col>
            })}
          </Row>
          <Row>
            <Col className='text-center'>
              <button className='btn btn-success rounded-5 btn-lg' onClick={() => navigate("/books")}>
                See All Books
                <i className='fa-solid fa-chevron-right ms-1' />
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='quotes py-5'>
        <Container>
          <Row>
            <Col>
              <h1 className='text-center fw-bold my-5'>Quotes</h1>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map((data) =>{
                return <SwiperSlide key={data.id} className="shadow-sm">
                  <p className='desc'>{data.desc}</p>
                  <div className='people'>
                    <img src={data.image} alt="" />
                    <div>
                      <h5 className='mb-1'>{data.name}</h5>
                      <p className='m-0 fw-bold'>{data.skill}</p>
                    </div>
                  </div>
                </SwiperSlide>
              })}
            </Swiper>
          </Row>
        </Container>
      </div>

      {/* Section FAQ */}
      <FaqComponent />
      {/* End Section FAQ */}
    </div>
  )
}

export default HomePage