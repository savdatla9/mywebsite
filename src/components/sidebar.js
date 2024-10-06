import React, { useState, useEffect } from 'react';

import { FaHome, FaUser, FaArchive, FaFolderOpen } from "react-icons/fa";

const Sidebar = () => {
    const [select, setSelect] = useState('home');

    useEffect(() => {
        switch(window.location.pathname){
            case '/Home':
                setSelect('home');
                break;
            case '/Skills':
                setSelect('skill');
                break;
            case '/Projects':
                setSelect('project');
                break;
            case '/Contact': 
                setSelect('contact');
                break;
            default:
                break;    
        };
    }, []);

    return (
        <div className='footer_links'>
            <a href='Home' onClick={() => setSelect('home')}>
                <FaHome style={{color: select==='home' ? '#8FBC8F' : '#ffffff'}} />
            </a>
            
            <a href='Home' onClick={() => setSelect('skill')}>
                <FaFolderOpen style={{color: select==='skill' ? '#8FBC8F' : '#ffffff'}} />
            </a>
            
            <a href='Projects' onClick={() => setSelect('project')}>
                <FaArchive style={{color: select==='project' ? '#8FBC8F' : '#ffffff'}} />
            </a>

            <a href='Contact' onClick={() => setSelect('contact')}>
                <FaUser style={{color: select==='contact' ? '#8FBC8F' : '#ffffff'}} />
            </a>
        </div>
    );
};

export default Sidebar;