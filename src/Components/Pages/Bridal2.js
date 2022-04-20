import React from 'react'
import { Link } from 'react-router-dom'
import { Container , Row ,Col, Card, CardImg } from 'react-bootstrap'
const Bridal2 = () => {
  return (
    <>
    <div className='general-container container-fluid' style={{background:'url(images/Bridal.jpg) center center/cover no-repeat'}}>
      <div className='overlay'>
        <h1 style={{textAlign:'center' , marginTop:'5rem',textShadow:'0px 0px 3px #fff'}}>PRE BRIDAL</h1>
        
      </div>
      </div>
      <Container className='mt-5 haircut'>
          <Row>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/manicure.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>ECONOMY</h3>
                
                    <Card.Body>
                        <p>Face Bleach/D-Tan</p>
                        <p>Glow Facial -VLCC</p>
                        <p>Full Body Wax-Honey</p>
                        <p>Manicure/Predicure-Basic</p>
                        <p>Threading</p>
                        <p>Bridal Make Up</p>
                        
                        

              <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/manicure.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Manicure - Crystal</h3>
                
                    <Card.Body>
                        <p>PRICE - 499</p>
                      
                        

              <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/manicure.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Pedicure</h3>
                        
                
                    <Card.Body>
                        <p>price-399</p>
                       
                    <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/manicure.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px' , alignItems:'center'}}/>
                    
                        <h3>Pedicure - Crystal </h3>
                                       
                    <Card.Body>
                        <p>price-649</p>
                           
                    
                    <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3}>
              <Card>
                    <CardImg src='images/manicure.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px' , alignItems:'center'}}/>
                    
                        <h3>Nails Cut & Polish </h3>
                                       
                    <Card.Body>
                        <p>price-149</p>
                           
                    
                    <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
          </Row>
          </Container>
          </>
  )
}

export default Bridal2