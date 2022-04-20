import React from 'react'
import { Link } from 'react-router-dom'
import { Container , Row ,Col, Card, CardImg } from 'react-bootstrap'


const Honeywax = () => {
  return (
    <>
    <div className='general-container container-fluid' style={{background:'url(images/waxing.jpg) center center/cover no-repeat'}}>
      <div className='overlay'>
        <h1 style={{textAlign:'center' , marginTop:'5rem'}}>HONEY WAXING</h1>
        
      </div>
      </div>
      <Container className='mt-5 haircut'>
          <Row>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/hw.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Half Hand-Honey Wax </h3>
                
                    <Card.Body>
                        <p>PRICE - 199</p>
                        
                        

              <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/hw.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Full Hand-Honey Wax</h3>
                
                    <Card.Body>
                        <p>PRICE - 249</p>
                      
                        

              <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/hw.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Full Hand + Under Arms - Honey Wax</h3>
                        
                
                    <Card.Body>
                        <p>price-299</p>
                       
                    <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/ub.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px' , alignItems:'center'}}/>
                    
                        <h3>Under Arms -Honey Wax</h3>
                                       
                    <Card.Body>
                        <p>price-59 (S)</p>
                           
                    
                    <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
          </Row>
        
          <Row>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/lw.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Half Legs - Honey Wax</h3>
                
                    <Card.Body>
                        <p>PRICE - 249</p>
                       
                        

              <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/lw.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Full  Legs - Honey Wax</h3>
                
                    <Card.Body>
                        <p>PRICE - 399</p>
                        

              <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/backb.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Half  Back - Honey Wax</h3>
                        
                    <Card.Body>
                        <p>price-249 (S)</p>
                        
                    <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/backb.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px' , alignItems:'center'}}/>
                    
                        <h3>Full Back - Honey Wax</h3>
                     
                
                    <Card.Body>
                        <p>price-399</p>
                     
                    
                    <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
          </Row>
          
          <Row>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/cleanup.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Full Face - Honey Wax</h3>
                
                    <Card.Body>
                        <p>PRICE - 40</p>
                        
                        

              <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/cleanup.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Chin - Honey Wax</h3>
                
                    <Card.Body>
                        <p>PRICE - 40</p>
                       
                        

              <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/lw.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Bikinie- Honey Wax</h3>
                        
                
                    <Card.Body>
                        <p>price-699</p>
                                              
                    
                    <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/lw.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px' , alignItems:'center'}}/>
                    
                        <h3>Full Body- Honey Wax</h3>
                        
                
                    <Card.Body>
                        
                        <p>price-999</p>   
                    
                    <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
          </Row>
          </Container>

      </>
  )
}

export default Honeywax