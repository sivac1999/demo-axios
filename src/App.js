import logo from './logo.svg';
import './App.css';
import Banner from './Banner';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';


function App() {
  const [photos,setphotos]=useState([]) //array usestate pass 

  useEffect(()=>{
    // fetch("https://api.tvmaze.com/shows/1/episodes")
    // .then((res)=>{
    //   return res.json()
    // })
    // .then((data)=>setphotos(data))
    
    //AXIOES
    axios.get("https://api.tvmaze.com/shows/1/episodes")
    .then((res)=>
  setphotos(res.data)
    )

},[])
  //  .catch((err)=>console.log(err))

  return (
   
     <div>
       <Banner />
         <Container className='c'  >
        <h1 className='mt-5 mb-5'>Movie List</h1>
     <Row className=''>
     
     {
      photos.map((photo)=>(
     
        <Col >
        <Card style={{ width: '18rem' }}  className='card'>
          <Card.Img variant="top" src={photo.image.medium} />
          <Card.Body>
            <Card.Title>{photo.name}</Card.Title>
            <Card.Text>
              <p>Rating:{photo.rating.average}</p>
              <p>{photo.season}</p>
              <p>{photo.airdate}</p>
            </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
      
    
      ))
     }
       </Row>
    </Container>
    </div>
  );
}

export default App;
