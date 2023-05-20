import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
  return (
    <>
    <div className='container mt-5 mb-3' style={{border:"1px solid black",borderRadius:"10px",padding:"10px"}}>
        <div className='row text-center'>
            <div className='col-lg-12 col-md-12 col-12'>
                <div>
                    <h3>Jani Vansh</h3>
                    <div className='mt-4'>
                        <span id='footer-icon'><GitHubIcon/></span>
                        <span id='footer-icon'><LinkedInIcon/></span>
                        <span id='footer-icon'><WhatsAppIcon/></span>
                    </div>
                </div>
                <div className='mt-4'>
                    <nav id='footer-nav'>
                        <ul id='footer-ul'>
                            <li>Home</li>
                            <li>Project</li>
                            <li>Skils</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer