import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';

function Skills() {
  return (
    <>
    
    <div className='container' id='skills'>

    <div className='skils-text text-center'>

    <h2>Skills</h2>
    <hr/>
    </div>
    
    
    <div className='row' id='skills-row'>
    <div className='col-lg-6 col-md-6 col-12' id='skills-col'>
            <div className='skills-sec-1 shadow-sm p-3 mb-5 bg-body' id='skills-frontend'>
                <h3>Frontend Developer</h3>


                <div className='row mt-5'>
                <div className='col-lg-6 col-md-6 col-12' id='skills-col-sec' style={{display:"flex",width:"100%",justifyContent:"center"}}>
                <ul style={{listStyleType:"none"}} id='language-ul'>
                    <li><VerifiedIcon/><h6>HTML</h6></li>
                    <li><VerifiedIcon/><h6>CSS</h6></li>
                    <li><VerifiedIcon/><h6>Javascript</h6></li>
                    
                </ul>
                <ul style={{listStyleType:"none"}} id='language-ul'>
                    <li><VerifiedIcon/><h6>Jquery</h6></li>
                    <li><VerifiedIcon/><h6>bootstrap</h6></li>
                    <li><VerifiedIcon/><h6>React js</h6></li>
                    
                </ul>
                
                </div>
                </div>



            </div>
        </div>
       <div className='col-lg-6 col-md-6 col-12' id='skills-col'>
            <div className='skills-sec-1 shadow-sm p-3 mb-5 bg-body' id='skills-backend'>
                <h3>Backend Developer</h3>

            <div className='row mt-5'>

            <div className='col-lg-6 col-md-6 col-12'  style={{display:"flex" ,width:"100%",justifyContent:"center"}}>
                
                <ul style={{listStyleType:"none"}} id='language-ul'>
                    <li><VerifiedIcon/><h6>PHP</h6></li>
                    <li><VerifiedIcon/><h6>Node js</h6></li>
                    <li><VerifiedIcon/><h6>Mysql</h6></li>
                    </ul>
                
                <ul style={{listStyleType:"none"}} id='language-ul'>    
                   <li><VerifiedIcon/><h6>SQL</h6></li>
                    <li><VerifiedIcon/><h6>Firebase</h6></li>
                    <li><VerifiedIcon/><h6>Express js</h6></li>
                    
                </ul>
                
                </div>
                </div>
                </div>
                
             </div>

            </div>
            
        </div>
    
    </>
  )
}

export default Skills