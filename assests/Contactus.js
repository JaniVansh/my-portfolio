import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
function Contactus() {
  return (
    <>
    <div className='text-center my-5' id='contact-us'>
        <h2>Contact us</h2>
        <hr/>
    </div>
    <div className='container mt-3' id='contact-main-div'>
    <div className='row'>
        
            <div className='col-lg-6 col-md-6 col-12' id='contact-card-sec'>
            <div className='text-center'>
            <h4>Talk To Me</h4>
        </div>
                    <div className='container'> 
                <div className='row' style={{display:"inline-flex",justifyContent:"center"}}>
                    <div className='col-lg-4 col-md-4 col-12 shadow p-3 mb-5 bg-body rounded ' style={{border:"1px solid black",height:"150px",width:"300px",margin:"10px",borderRadius:"10%"}}>
                        <div className='text-center mt-3'>
                            <EmailIcon style={{fontSize:"170%"}}/>
                            <h6>Email</h6>
                            <p>janivansh2002@gmail.com</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-12 shadow p-3 mb-5 bg-body rounded' style={{border:"1px solid black",height:"150px",width:"300px",margin:"10px",borderRadius:"10%"}}>
                    <div className='text-center mt-3'>
                    <WhatsAppIcon  style={{fontSize:"170%"}}/>
                    <h6>WhatsApp</h6>
                    <p>+91 7778003769</p>
                     </div>       
                    </div>
                    <div className='col-lg-4 col-md-4 col-12 shadow p-3 mb-5 bg-body rounded' style={{border:"1px solid black",height:"150px",width:"300px",margin:"10px",borderRadius:"10%"}}>
                    <div className='text-center mt-3'>
                        <ChatIcon  style={{fontSize:"170%"}}/>
                        <h6>Message</h6>
                        <p>Jani Vansh</p>
                        </div>
                    </div>
                  </div>
                  </div>
               
            </div>
            <div className='col-lg-6 col-md-6 col-12' id='contact-form-sec'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-12'>
                       <div className='text-center'>
                        <h3>Write Me Your Project</h3>
                       </div>
                        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><b>Name</b></label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><b>Mail</b></label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label"><b>Project</b></label>
  <textarea class="form-control" placeholder='Write Your Project' id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div className='mb-3'>
<button id='send-message-btn' className='btn btn-dark mt-3'>Send Message <SendIcon style={{marginLeft:"10px"}}/></button>
</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Contactus