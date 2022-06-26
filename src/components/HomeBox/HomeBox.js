import React from 'react'
import './HomeBox.css'
import rectaangle from './Rectangle 2.png';
import image1 from './text 1.png';
import image2 from './text 2.png';
import box from './Rectangle 7.png';
import neww from './New.png';
function HomeBox() {
  return (
    <>
        {/* <h1>Gopal</h1> */}
        
        
        <div className='imgscroll'>
          <div className='images'>
          <div className='rectangle6'>
          </div>
          <div className='rectangle5'>
          </div>
          <div className='carousel1'>
          
          </div>
          <div className='carousel2'>

          </div>
          <div className='rectangle4'>

          </div>
          </div>
        <div className='imgcover'>
        
        </div>
  </div>
        <div className='main Data'>
        <div className="image">
        <img src={rectaangle} alt="Snow" />
        <div className='news'>
        <img src={neww} alt="newbox" />
  </div>
        <div className="title" >
          
        <img src={image1} alt="firstimage" />
        
        </div>
        <div className="content">
        
      <img src={image2} alt="seconfimage" />
        </div>
        </div>
        </div>
      <div className='aboutbox'>
      <img src={box} alt="box" />
</div>
      
    </>
  )
}

export default HomeBox
