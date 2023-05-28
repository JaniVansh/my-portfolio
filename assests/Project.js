import React ,{useState} from 'react'
import Webapp from '../pages/api/Webapp.js'
import Apk from '../pages/api/Apk.js'
import Image from 'next/image.js'
import { Card, Grid, Row, Text } from "@nextui-org/react";

function Project() {

const [webapp,setwebapp] = useState(Webapp)
const [application,setapk] = useState(Apk)
const[data,setdata] = useState([])


  return (
    <>
    <div style={{marginTop:"200px"}} id='projects'>
        <div className='text-center'>
            <h2>Projects</h2>
            </div>
            <div>
            <hr/>
        </div>
        </div>
    <div className='container text-center'>
       <div className='row p-3  d-flex'>
       <div className='col-lg-3 col-md-3 col-12' style={{display:"flex",justifyContent:"center",width:"100%"}}>
            
      <div className='col' id='pjc-btn-div'>
       <button id='pjc-btns' className='btn' onClick={()=>setdata(webapp)}>Web app</button> 
       <button id='pjc-btns' className='btn' onClick={()=>setdata(application)}>Aplication</button> 
       <button id='pjc-btns' className='btn' onClick={()=>setdata([...webapp,...application])}>All</button> 
       </div>
       </div>
       </div>
        </div>
        <div className='container'>
        <Grid.Container gap={2} justify="flex-start">
      {data.map((item, index) => (
        <Grid xs={6} sm={3} key={index}>
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
              onClick={()=> item.projectlink== null ?  alert("no project") : window.open(`${item.projectlink}`,'_blank')}
               src={item.img}
               objectFit="cover"
                width="100%"
                height={140}
                alt="img"
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{item.name}</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                  {item.title}
                </Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
        </div>
    
    </>
  )
}

export default Project