import Navbar from '@/assests/Navbar'
import React from 'react'
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import GetAppIcon from '@mui/icons-material/GetApp';
import { saveAs } from 'file-saver';
import Image from 'next/image';
//import Pdf from '../.next/stocks/janivansh.pdf'
import useDownloader from "react-use-downloader";



function About() {



  const { size, elapsed, percentage, download,
    cancel, error, isInProgress } =
useDownloader();

const fileUrl = "/Resume/janivansh.pdf";
const filename = "janivansh.pdf";


const Downloadcv = () =>{
}


  return (
    <>

    
<div className='container' id="about-cont">

<div className='row text-center'>
        <h2>About Me</h2>
        <hr/>
</div>

<div className='row mt-5'>

<div className='col-lg-6 col-md-6 col-12'>
<div className='row'>
  <div className='col-lg-12 col-md-12 col-12'>

<div className='about-image text-center'>
  <img src="https://ouch-cdn2.icons8.com/cOvD7Uk7Q3qUfpBfNXhe91_kNIrJjNQBuz71cqljm4M/rs:fit:256:223/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDk2/L2Y4ZTM2MmIwLTI3/YmUtNGJjOC1hMTE2/LWQwNTIzYzA3MDBm/Yy5wbmc.png" width={350} height={350} />
</div>
</div>
</div>
</div>


<div className='col-lg-6 col-md-6 col-12'>

<div className='row' id='cont-sec'>
  <div className='col-lg-4 col-md-4 col-12'>
  
<div className='sec-1 shadow-sm p-3 mb-5 bg-body rounded'>
<MilitaryTechIcon sx={{ fontSize: 30 }}/>
<h4>Experience</h4>
<p>Fresher</p>

</div>
</div>

<div className='col-lg-4 col-md-4 col-12'>
<div className='sec-1 shadow-sm p-3 mb-5 bg-body rounded'>
<BusinessCenterIcon sx={{ fontSize: 30 }}/>
<h4>Completed</h4>
<p>3+ Projects</p>
</div>
</div>

<div className='col-lg-4 col-md-4 col-12'>
<div className='sec-1 shadow-sm p-3 mb-5 bg-body rounded'>
<HeadsetMicIcon sx={{ fontSize: 30 }}/>

<h4>Support</h4>
<p>24/7 Hours</p>

</div>
</div>
</div>

<div className='row'>
 
<div id='text-of-about'>

<p>Frontend Developer ,i create web pages with UI / UX user interface. I have years a experience and many clients are happy with the projects carried out.
Although I have no professional experience, I have worked on several personal projects, including building websites and web applications, which demonstrate my coding skills, problem-solving ability, and my knack for creating user-friendly interfaces.

I hold a degree in computer application and have taken numerous courses in web development and related fields. 
</p>

</div>
</div>
<div className='row'>
  <div className='col-lg-12 col-md-12 col-12'>

<div className='text-center mt-3' id='about-download-cv-btn'>
  <button className='btn btn-dark' onClick={()=>download(fileUrl, filename)}>Download CV <GetAppIcon sx={{background:"none"}}/></button>
</div>
</div>
</div>

</div>



</div>


</div>

    
    </>
  )
}

export default About