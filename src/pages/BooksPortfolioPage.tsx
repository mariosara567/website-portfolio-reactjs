import { Container, Row, Col } from 'react-bootstrap'
import { semuaBuku } from '../data/index'

import FaqComponent from '../components/FaqComponent'

const BooksPortfolioPage = () => {
  return (
    <div className="books-page">
      <div className='books min-vh-100'>
        <Container>
          <Row>
            <Col>
              <h1 className='fw-bold text-center'>Semua Buku</h1>
              <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </Col>
          </Row>
          <Row>
          {semuaBuku.map((books) => {
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
        </Container>
      </div>
      <FaqComponent />
    </div>
  )
}

export default BooksPortfolioPage