import React from 'react'
import { Link } from 'react-router-dom'
import { Container , Row ,Col, Card, CardImg } from 'react-bootstrap'

const Facial = () => {
  return (
    <>
    <div className='general-container container-fluid' style={{background:'url(images/facials.jpg) center center/cover no-repeat'}}>
      <div className='overlay'>
        <h1 style={{textAlign:'center' , marginTop:'5rem'}}>FACIAL & CLEAN UP</h1>
     
      </div>
      </div>
      
      <Container className='mt-5 haircut'>
      <Row>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/fb.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Full Face & Neck Bleach </h3>
                        
                
                    <Card.Body>
                        
                        <p>PRICE - 299</p>
                        
                        

              <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/hb.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                    <h3>Full Hand Bleach</h3>
                      
                
                    <Card.Body>
                      
                        <p>PRICE - 399</p>
                        
                        

              <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/ub.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                    <h3>Under Arms Bleach </h3>
                       
                
                    <Card.Body>

                        <p>price-149 </p>
                                          
                    
                    <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/flb.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px' , alignItems:'center'}}/>
                    <h3>Half Leg Bleach</h3>
                      
                                          <Card.Body>
                    
                        <p>price-299 </p> 
                        
                    
                    <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
          </Row>
          <Row>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/flb.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Full Legs Bleach</h3>
                       
                
                    <Card.Body>
                        
                        <p>PRICE - 499</p>
                        
                        

              <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/backb.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                    <h3>Back Bleach</h3>
                       
                
                    <Card.Body>
                   
                        <p>PRICE - 399</p>
                        
                        

              <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/backb.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                    <h3>Full Body Bleach</h3>
                        
                
                    <Card.Body>

                        <p>price-1499 </p>
                                          
                    
                    <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/d.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px' , alignItems:'center'}}/>
                    <h3>Face & Neck D-Tan</h3>
                      
                                          <Card.Body>
                    
                        <p>price-399 </p> 
                        
                    
                    <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
          </Row>
          <Row>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/dtan.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Full Back D-Tan</h3>
                       
                
                    <Card.Body>
                        
                        <p>PRICE - 449</p>
                        
                        

              <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/hb.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                    <h3>Full Hand D-Tan</h3>
                       
                
                    <Card.Body>
                   
                        <p>PRICE - 449</p>
                        
                        

              <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/flb.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                    <h3>Full Leg D-Tan</h3>
                        
                
                    <Card.Body >

                        <p>price-499 </p>
                                          
                    
                    <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/backb.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px' , alignItems:'center'}}/>
                    <h3>Full Body D-Tan</h3>
                      
                                          <Card.Body>
                    
                        <p>price-1799</p> 
                        
                    
                    <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
          </Row>
         
      <Row>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/cleanup.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Face Cleanup</h3>
                        <h5>VLCC</h5>
                
                    <Card.Body>
                        <p>InstaGlow /Fruit/Skin Tightening</p>
                        <p>PRICE - 399</p>
                        
                        

              <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/Cleanup.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                    <h3>Face Cleanup</h3>
                        <h5>VLCC</h5>
                
                    <Card.Body>
                      <p>Charcoal Cleanup</p>
                        <p>PRICE - 399</p>
                        
                        

              <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/cleanup.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                    <h3>Face Cleanup</h3>
                        <h5>Lotus Professional</h5>
                
                    <Card.Body>

                        <p>price-449 </p>
                                          
                    
                    <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/cleanup.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px' , alignItems:'center'}}/>
                    <h3>Face Cleanup</h3>
                        <h5>O3+ Professional</h5>
                    <Card.Body>
                    
                        <p>price-699 </p> 
                        
                    
                    <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
          </Row>
          <Row>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/fruit facial.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Fruit Facial</h3>
                        
                
                    <Card.Body>
                        <p>PRICE - 499</p>
                        
                        

              <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/fruit facial.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3> Shahnaz -Fruit Facial</h3>
                                        
                    <Card.Body>
                        <p>PRICE - 599</p>
                        

              <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/saloon3.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        
                    <h3> Lotus Herbal Whitening & Glow</h3>
                         
                
                    <Card.Body>
                         
                        <p>price-699</p>                        
                    
                    <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/saloon3.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px' , alignItems:'center'}}/>
                    
                    <h3> Lotus Herbal Anti-Tan</h3>
                      
                
                    <Card.Body>
                        
                        <p>price-699 </p> 
                      
                    
                    <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
          </Row>
          <Row>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/dtan.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Anti - Tan</h3>
                
                    <Card.Body>
                        <p>PRICE - 599</p>
                        

              <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/saloon3.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h4>Blossom Kochhar Facial</h4>
                        
                
                    <Card.Body>
                        <p>PRICE - 749</p>
                         

              <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/Facial 1.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Blossom Kochhar Bridal Glow</h3>
                        
                
                    <Card.Body>
                        
                        <p>price-799</p>                        
                    
                    <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6} >
              <Card>
                    <CardImg src='images/saloon3.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px' , alignItems:'center'}}/>
                    
                    <h3>Lotus Professional Insta Glow</h3>
                    
                    <Card.Body>
                       
                        <p>price-1199</p>   
                    
                    <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
          </Row>
          <Row>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/Facial 1.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        
                    <h3>O3+ Whitening Facial</h3>
                    
                
                    <Card.Body>
                        <p>PRICE - 1199</p>
                        
                        

              <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/Facial 1.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                       
                    <h3>Lotus Professional Gold Sheen</h3>
                        
                
                    <Card.Body>
                        <p>PRICE - 1199</p>
                        
                        

              <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/Facial 1.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                      
                    <h3>Lotus Professional 4 Layer Whitening </h3>
                        
                
                    <Card.Body>
                        <p>price-1699</p>
                                               
                    
                    <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/dtan.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px' , alignItems:'center'}}/>
                    
                        
                    <h3>O3+ Bridal Facial</h3>
                        
                
                    <Card.Body>
                        <p>price-1999</p>
                           
                    
                    <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
          </Row>
          <Row>
              <Col md={4} xs={6}>
                <Card>
                    <CardImg src='images/Facial 1.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        
                    <h3>Shahnaz Silver</h3>
                        
                
                    <Card.Body>
                        <p>PRICE - 999</p>
                        
                        

              <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={4} xs={6}>
                <Card>
                    <CardImg src='images/Facial 1.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                       
                    <h3>Shahnaz Gold</h3>
                        
                
                    <Card.Body>
                        <p>PRICE - 1599</p>
                        
                        

              <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={4} xs={6}>
              <Card>
                    <CardImg src='images/Facial 1.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                      
                    <h3>Shahnaz Diamond </h3>
                    
                
                    <Card.Body>
                        <p>price-1999</p>
                                               
                    
                    <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              </Row>
      </Container>
      </>
  )
}

export default Facial