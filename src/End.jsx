import React from 'react';
import Endimg from './Images/Endques.png';
import faceimg1 from './Images/faceimg1.png';
import faceimg2 from './Images/faceimg2.png';


const End = () => {
  return (
    <>
        <div className="faq">

<div className='faqhead'>Frequently Asked Questions</div>

<div className="faqflex">
<div className="faqfirst">

<div className='faqfirstQandA'> <div className='Q'>Q  </div><div className='question'>No matter how hard I try,
 no matter how much might I muster, I cannot exhaust the Spire of Unending Flame.</div></div>

 <div className='faqfirstQandA'> <div className='Q'>A  </div><div className='Answer'>Well, yeah. It’s unending.</div></div>

<div className='faqfirstQandA'><div className='Q'>Q  </div><div className='question'>My accursed artifact is emitting an incessant,
 loud hymming, as if a plague of locusts was approaching.</div></div>
<div className='faqfirstQandA'><div className='Q'>A  </div><div className='Answer'>This means the Marketo integration was successful.</div></div>
</div>

<div className="faqsecondimg"><img src={Endimg} alt="Quesmark" className='Quesmark'/></div>

<div className="faqthird">
<div className='faqfirstQandA'><div className='Q'>Q  </div><div className='question'>Are there any risks to using an object that is
 saturated with several millennia's worth of sorrows for marketing purposes?</div></div>

<div className='faqfirstQandA'><div className='Q'>A  </div><div className='Answer'>Not really! Accursed artifacts are a sound investment 
that will reliably increase both the number of leads and their quality.There are some minor issues — for example, temporary or permanent 
separation of the soul and body — but these can be corrected by installing a custom firmware.</div></div>
</div>
</div>
        </div>
        

        <div className="reviews">
            <div className='reviewstexthead' style={{paddingBottom:'5%'}}>What industry experts are saying about 
ARTIFACT-ORIENTED MARKETING</div>

<div className="comments">
  <div className="comment11">
<p style={{fontSize:'20px',fontWeight:'500',fontFamily:'Lato',paddingTop:'25px'}}>Jess Jaunty</p>
<p style={{fontSize:'14px',color:'rgb(128, 128, 128)',fontFamily:'Lato',fontWeight:'500',paddingBottom:'10%'}}>Current content marketer, 
soon-to-be Incarnation of Seething Despair</p>
<p style={{fontSize:'16px',fontFamily:'Arial, sans-serif;',fontWeight:'500'}}>I’m just thrilled with the results my relic has produced. Not only 
has it generated a ton of new business, it’s enabled me to completely 
obliterate my competition. Literally! Ha ha ha ha!</p>

<div className="faceimg"><img src={faceimg1} alt="faceimg1" className='faceimage1'/></div>

  </div>
  <div className="comment11">
  <p style={{fontSize:'20px',fontWeight:'500',fontFamily:'Lato',paddingTop:'25px'}}>Eric Enigma</p>
<p style={{fontSize:'14px',color:'rgb(128, 128, 128)',fontFamily:'Lato',fontWeight:'500',paddingBottom:'10%'}}>Custom Tortoiseshell PC Case Crafstman</p>
<p style={{fontSize:'16px',fontFamily:'Arial, sans-serif;',fontWeight:'500'}}>I knew that this memento of bygone darkness could be used to
unlock incredible marketing potential, but I wasn’t prepared for
just how effective it is! No, really. I wasn’t. I’m still not.</p>

<div className="faceimg"><img src={faceimg2} alt="faceimg1" className='faceimage1'/></div>
</div>

</div>

<div className="btn">
<button className='firstbutton'>Yes, I want to Scale</button>
</div>

        </div>
 
 <div className="conclu">
    <div className="conclu1">
    START MARKETING WITH (INCREDIBLY DANGEROUS) POWER TODAY
    </div>
    <div className="conclu2">
    Start the course for just $49.99 and a solemnly sworn oath
    </div>

    <div className="conclu3">
    Your Satisfaction Is 100% Guaranteed Or Your Money Back
    </div>
    <div className="conclu4">
    We keep the oath. And so do They.
    </div>
 </div>
    </>
  )
}

export default End;