import React, { useEffect, useRef } from 'react';

import Typed from 'typed.js';
// import { Row, Col } from 'react-bootstrap';

import { SlSocialInstagram, SlSocialLinkedin, SlSocialGithub } from "react-icons/sl";

const HomeHtml = () => {
    const el = useRef(null);

    const textArr = [
      "I'm a React developer. ", 
      "I'm a Tech Enthusiast. ", 
      "5+ years in IT Industry. ",
      `Learning Node JS, MongoDB. ^1000\n Unreal Engine, Unity and Extended Reality. `
    ];

    // let index = 0;
  
    // function displayNext() {
    //     if(index<textArr.length){
    //         console.log(index); setText(textArr[index]);
    //         index++;
    //     };
    // };
  
    useEffect(() => {
        document.title = 'Welcome';

        const typed = new Typed(el.current, {
            strings: textArr,
            typeSpeed: 0,
            backSpeed: 0,
            fadeOut: false,
            loop: true,
        });
      
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div style={{position: 'absolute', zIndex: '500', color: '#fff', width: '100vw', height: '100vh'}}>
            <div style={ {paddingLeft: '2.5vw', marginTop: '5vh', color: 'ghostwhite'}}>
                <div style={{fontSize: '35px', fontWeight: '400'}}>Hi There,</div>

                <div style={{fontSize: '30px', fontWeight: '600', marginTop: '1vh', display: 'flex'}}>
                    <span style={{fontStyle: 'italic', fontFamily: 'cursive'}}>Sai Akhil Varma Datla</span> 
                    
                    <div style={{paddingLeft: '5px', marginTop: '15px'}} className='infinity'></div><span>✌</span>
                </div>

                <div style={{marginTop: '2.2vh', width: '100vw', color: 'goldenrod', fontWeight: '700', fontSize: '21px'}}>
                    <span ref={el} />
                </div>

                <div className='social_links'>
                    <a href='https://github.com/savdatla9/' target='blank'>
                        <SlSocialGithub style={{color: '#fff', fontSize: '35px'}} />
                    </a>

                    <a href='https://www.linkedin.com/in/sai-akhil-varma-datla-051b3b158/' target='blank'>
                        {/* #0a66c2 */}
                        <SlSocialLinkedin style={{color: '#fff', fontSize: '35px'}} />
                    </a>

                    <a href='https://www.instagram.com/d.s.a.varma9/' target='blank'>
                        <SlSocialInstagram style={{color: '#fff', fontSize: '35px'}} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HomeHtml;