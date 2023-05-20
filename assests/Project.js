import React ,{useState} from 'react'
import Webapp from '../pages/api/Webapp.js'
import Apk from '../pages/api/Apk.js'
import Image from 'next/image.js'
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
            <div className='row'>
            <div className='col-lg-12 col-md-12 col-12'>
            <div className='row'>
           <div className='col-lg-12 col-md-12 col-12' id='project-box-div'>
                
                {data.map((res)=>{
                   return(<>
                   <div className='project-box'>
                    <Image src={res.img} height={200} width={225} style={{borderRadius:"10%"}} alt='no'/>
                    </div>
                   </>)
                })}
                </div>
            </div>
            </div>
            </div>
        </div>
    
    </>
  )
}

export default Project