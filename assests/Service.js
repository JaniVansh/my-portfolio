import React from 'react'
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSpring, animated } from '@react-spring/web';


const Fade = React.forwardRef(function Fade(props, ref) {
    const {
      children,
      in: open,
      onClick,
      onEnter,
      onExited,
      ownerState,
      ...other
    } = props;
    const style = useSpring({
      from: { opacity: 0 },
      to: { opacity: open ? 1 : 0 },
      onStart: () => {
        if (open && onEnter) {
          onEnter(null, true);
        }
      },
      onRest: () => {
        if (!open && onExited) {
          onExited(null, true);
        }
      },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
          {React.cloneElement(children, { onClick })}
        </animated.div>
      );
    });

    Fade.propTypes = {
        children: PropTypes.element.isRequired,
        in: PropTypes.bool,
        onClick: PropTypes.any,
        onEnter: PropTypes.func,
        onExited: PropTypes.func,
        ownerState: PropTypes.any,
      };
      
      const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      
     

      


function Service() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
   
    
    return (
        <>
    

            <div className='container' style={{ marginTop: "7rem" }} id='service'>
                <div className='text-box text-center'>
                    <h2>Services</h2>
                    <hr />
                </div>
                <div className='row' id='service-card-row'>
                    <div className='col-lg-4 col-md-4 col-12' id='service-sec-col'>
                        <div className='Service-section'>
                                
                            <div className='shadow-sm p-3 mb-5 bg-body rounded' id='service-box-sec-1'>
                               <div id='sec-1-box'>
                                <SpaceDashboardOutlinedIcon sx={{ fontSize: 30 ,  marginTop: -5}} />
                                <h4>Web</h4>
                                <h4>Developer</h4>
                                <span>View More </span>
                                <ArrowRightAltIcon />
                            </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-12' id='service-sec-col'>
                        <div className='Service-section'>
                            <div className='shadow-sm p-3 mb-5 bg-body rounded' id='service-box-sec-1' data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                <div id='sec-1-box'>
                                <CodeOutlinedIcon sx={{ fontSize: 30 , marginTop: -5 }} />
                                <h4>Front-end</h4>
                                <h4>Developer</h4>
                                <span>View More </span>
                                <ArrowRightAltIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-12' id='service-sec-col'>
                        <div className='Service-section'>

                            <div className='shadow-sm p-3 mb-5 bg-body rounded' id='service-box-sec-1'>
                            <div id='sec-1-box' onClick={handleOpen}>
                                <StorageOutlinedIcon sx={{ fontSize: 30 , marginTop: -5 }} />
                                <h4>Back-end</h4>
                                <h4>Developer</h4>
                                <span>View More </span><ArrowRightAltIcon />
                            </div>
                            </div>
                            

                        </div>
                    </div>

                </div>
            </div>
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>

            <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="spring-modal-title" variant="h6" component="h2">
              Text 3 in a modal
            </Typography>
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>


      

        </>
    )
}

export default Service