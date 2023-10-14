import React from 'react';
import image2 from './Images/secondimage.png';
const FirstSec = () => {
  return (
    <>
    
    <div className="parallax">
    <div className='parallax-content'>
        <header className='header1'>Attention MedSpa Owners!</header>
       
      <div className="firsttext">Scaling MedSpa Businesses from $10K Per Month to <span className='firsttext1'>$50K in 30 Days </span> with our Lead Generation Machine and Automation with AI or You <span className='firsttext2'> Don't Pay</span></div>
<div className="submain">
    <div className="submain1" style={{fontWeight:'500',font:'26px lato',fontStyle:'italic',color:'white'}}>
   <div style={{paddingBottom:'4%'}}>Successfully Scaled 500+ Clients</div>
   <div style={{paddingBottom:'4%'}}>20+ Years of Expertise</div>
   <div>Proven System</div>
    </div>

    <div className="submain2" style={{fontWeight:'800',font:'20px montserrat',fontStyle:'normal',color:'white'}}>
<div style={{paddingBottom:'4%'}}>Slimming & Beauty Centers</div>
<div style={{paddingBottom:'4%'}}>Aesthetics and Body Sculpting Clinics</div>
<div style={{paddingBottom:'4%'}}>Botox Clinics and Dermatologists</div>
<div>Semaglutide and Harmone Providers</div>
    </div>
</div>

<div className="btn">
<button className='firstbutton'>Yes, I want to Scale</button>
</div>
</div>
</div>
<div className="image2">
<div className='image2text'>As Seen On</div>
    <img src={image2} alt="2ndimage"  className='image2img'/>
</div>

    </>
  )
}

export default FirstSec;