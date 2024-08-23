import React, { useState, useEffect } from 'react';

// import { Row, Col } from 'react-bootstrap';

import { SlSocialInstagram, SlSocialLinkedin, SlSocialGithub } from "react-icons/sl";

const HomeHtml = () => {
    const [text, setText] = useState('');

    const textArr = [
      "I'm a React developer", 
      "I'm a Tech Enthusiast", 
      "5+ years in IT Industry",
      "Learning Node JS & MongoDB",
      "Learning Unreal Engine & XR"
    ];
  
    function setRandomName() {
        const index = Math.floor(Math.random() * textArr.length);
        
        let newText = textArr[index];
    
        if(newText===text){ 
            setRandomName() 
        }else{ 
            setText(newText) 
        }
    
        return;
    };
  
    useEffect(() => {
        setTimeout(() => {setRandomName()}, 2000);
    
        document.title = 'Welcome';
    }, [text]);

    return (
        <div style={{position: 'absolute', zIndex: '500', color: '#fff', width: '100vw', height: '100vh'}}>
            <div style={ {paddingLeft: '2.5vw', marginTop: '5vh', color: 'ghostwhite'}}>
                {/* // {paddingLeft: '2.5vw', marginTop: '5vh', color: 'black'} :  */}
               
                <div style={{fontSize: '35px', fontWeight: '400'}}>Hi There,</div>

                <div style={{fontSize: '30px', fontWeight: '600', marginTop: '1vh', display: 'flex'}}>
                    <span style={{fontStyle: 'italic', fontFamily: 'cursive'}}>Sai Akhil Varma Datla</span> 
                    {/* <div style={{marginLeft: '5px', marginTop: '-5px'}} className='yin-yang'></div> */}
                    <div style={{paddingLeft: '5px', marginTop: '15px'}} className='infinity'></div><span>✌</span>
                </div>

                <div style={{fontSize: '28px', fontWeight: '600', marginTop: '5vh', width: 'max-content', color: 'Goldenrod'}} className='typing'>            
                    {/* // theme===false ? {fontSize: '25px', fontWeight: '600', marginTop: '10px', width: 'max-content', color: 'seagreen'} :  */}
                    {text}
                </div>

                <div className='social_links'>
                    <a href='https://github.com/savdatla9/' target='blank'>
                    {/* / <img src={theme===false?'/github_dark.svg':'/github_light.svg'} /> */}
                        <SlSocialGithub style={{color: '#fff'}} />
                    </a>

                    <a href='https://www.linkedin.com/in/sai-akhil-varma-datla-051b3b158/' target='blank'>
                    {/* <img src={theme===false?'/linkedin_dark.svg':'/linkedin_light.svg'} /> */}
                    {/* 0a66c2 */}
                        <SlSocialLinkedin style={{color: '#fff'}} />
                    </a>

                    <a href='https://www.instagram.com/d.s.a.varma9/' target='blank'>
                    {/* <img src={theme===false?'/instagram_dark.svg':'/instagram_light.svg'} /> */}
                        <SlSocialInstagram style={{color: '#fff'}} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HomeHtml;