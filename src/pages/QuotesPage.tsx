import { Container, Row, Col } from "react-bootstrap"
import { quotes } from "../data/index"

const QuotesPage = () => {
  return (
    <div className="quotes-page">
      <div className="quotes">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Semua Quotes</h1>
              <p className="text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, fuga!
              </p>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 row-cols-1">
            {quotes.map((data) => {
              return <Col key={data.id} className="mb-5">
                <p className='desc shadow-sm'>{data.desc}</p>
                <div className='people'>
                  <img src={data.image} alt="" />
                  <div>
                    <h5 className='mb-1'>{data.name}</h5>
                    <p className='m-0 fw-bold'>{data.skill}</p>
                  </div>
                </div>
              </Col>
            })}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default QuotesPage