import React from 'react'
import { Link } from 'react-router-dom'
import { Container , Row ,Col, Card, CardImg } from 'react-bootstrap'
import './Style.css'

const Ricawax = () => {
  return (
    <>
    <div className='general-container container-fluid' style={{background:'url(images/hw.jpg) center center/cover no-repeat'}}>
      <div className='overlay'>
        <h1 style={{textAlign:'center' , marginTop:'5rem'}}>RICA WAXING</h1>
    
      </div>
      </div>
      <Container className='mt-5 haircut'>
          <Row>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/hw.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Half Hand + Under Arms- RICA Wax </h3>
                
                    <Card.Body>
                        <p>PRICE - 349</p>
                        
                        

              <Link to='/'><button className='btn btn-warning'>Book Now</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/hw.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Full Hand-RICA Wax</h3>
                
                    <Card.Body>
                        <p>PRICE - 449</p>
                      
                        

              <Link to='/'><button className='btn btn-warning'>Book Now</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/hw.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Full Hand + Under Arms - RICA Wax</h3>
                        
                
                    <Card.Body>
                        <p>price-499</p>
                       
                    <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/ub.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px' , alignItems:'center'}}/>
                    
                        <h3>Under Arms - RICA Wax</h3>
                                       
                    <Card.Body>
                        <p>price-149</p>
                           
                    
                    <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
          </Row>
        
          <Row>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/lw.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Half Legs - RICA Wax</h3>
                
                    <Card.Body>
                        <p>PRICE - 349</p>
                       
                        

              <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/lw.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Full  Legs - RICA Wax</h3>
                
                    <Card.Body>
                        <p>PRICE - 499</p>
                        

              <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/backb.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Half  Back - RICA Wax</h3>
                        
                    <Card.Body>
                        <p>price-349</p>
                        
                    <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/backb.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px' , alignItems:'center'}}/>
                    
                        <h3>Full Back - RICA Wax</h3>
                     
                
                    <Card.Body>
                        <p>price-499</p>
                     
                    
                    <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
          </Row>
          
          <Row>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/lw.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Full Front - RICA Wax</h3>
                
                    <Card.Body>
                        <p>PRICE - 449</p>
                        
                        

              <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/lw.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Full Body - RICA Wax</h3>
                
                    <Card.Body>
                        <p>PRICE - 1499</p>
                       
                        

              <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              
          </Row>
          </Container>

      </> 
  )
}

export default Ricawax