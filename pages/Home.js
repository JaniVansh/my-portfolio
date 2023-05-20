import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import About from '../assests/About'
import Skills from '../assests/Skills'
import Service from '../assests/Service'
import Project from '../assests/Project'
import SendIcon from '@mui/icons-material/Send';
import Contactus from '../assests/Contactus'
import Footer from '../assests/Footer.js'
function Home() {



  return (
    <>



      <div className='container' id='home-cont'>
        <div className='row' id='box'>

          <div className='col-lg-4 col-md-4 col-12' >
            <ul className='icon-ul'>
              <li><LinkedInIcon sx={{ fontSize: 30 }} id="linkdin-icon" onClick={() => window.open("https://www.linkedin.com/in/jani-vansh-38a532246/", "_blank")} /></li>
              <li><InstagramIcon sx={{ fontSize: 30 }} /></li>
              <li><GitHubIcon sx={{ fontSize: 30 }} id="github-icon" onClick={() => window.open("https://github.com/JaniVansh", "_blank")} /></li>
            </ul>
          </div>
          <div className='col-lg-4 col-md-4 col-12' >

            <section>
              <h1><strong>jani Vansh</strong></h1>
              <h3>________Web Developer</h3>
              <p>I'm web developer based in india , and i'm very passionate and dedicated to my work..</p>

              <button className='btn btn-dark my-5' onClick={() => window.open('https://api.whatsapp.com/send/?phone=7778003769&text&type=phone_number&app_absent=0', '_blank')}>Say Hello &nbsp; &nbsp;<SendIcon /></button>
            </section>
          </div>
          <div className='col-lg-4 col-md-4 col-12' >
            <div className='row'>
              <div className='col-lg-12 col-md-12 col-12'>
                <div id='profile'></div>
              </div>
            </div>
          </div>


        </div>


      </div>
      {/*////////////////////// About Us Section ///////////////////////// */}

      <About />

      {/*////////////////////// Skils Us Section ///////////////////////// */}

      <Skills />
      {/*////////////////////// Service Us Section ///////////////////////// */}

      <Service />

      {/*////////////////////// Project  Section ///////////////////////// */}

      <Project />
      {/*////////////////////// Contact  Section ///////////////////////// */}

      <Contactus />

      {/*////////////////////// Footer  Section ///////////////////////// */}

      <Footer />


    </>
  )
}

export default Home