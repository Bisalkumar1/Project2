import React from 'react';

import image2 from './Images/image2.png';
import image3 from './Images/image3.png';

const Secondsec = () => {
  return (
  <>
  <div className="secondsec">
    <div className='secondsectext'> <span className='underlinepurplecoltext'> Hexerve </span> is #1 Digital Marketing Company specialized in <span className='underlinepurplecoltext'> Medspa Marketing </span>. We create and automate a complete <span className='underlinepurplecoltext'> DONE-FOR-YOU </span> system for <span className='underlinepurplecoltext'> Lead Generation </span> and sales pipeline. </div>
   
   <section className='image-contain'>
<img src={image2} alt="imagedisplay" className='imagedisplay'/> 
<img src={image3} alt="imagegraph" className='imagegraph'/>
   </section>
    
    <div className="secondlasttext">
    In this rapidly changing atmosphere of #hashtags, native advertising, SEO, PPC, CPC, BYOB, etc., it can be hard to know where you should focus your marketing efforts.
    </div>

    <div className="btn">
<button className='firstbutton'>Yes, I want to Scale</button>
</div>
    </div>
  </>
  )
}

export default Secondsec;