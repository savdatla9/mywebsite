import React, { useState } from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';

import LinvLogo from '../assets/linview.jpg';
import AtumLogo from '../assets/atumlife.jpg';
import GiftLogo from '../assets/gifteria.png';
import PlugxrLogo from '../assets/plugxr.jpg';
import SdlLogo from '../assets/splitdeals.png';
import MebzrLogo from '../assets/meebazaar.jpg';
import CoingLogo from '../assets/coinhunter.png';
import TnijamLogo from '../assets/telangananijam.jpg';

import './index.css';

export const data = [
    {
        title: 'Gifteria',
        desc: '',
        img: GiftLogo,
        url: '',
        skills: ['HTML', 'CSS', 'JS', 'React Js', 'React Native'],
        isWeb: true,
        isMobile: true,
        isXR: false,
        isUE: false,
        isThree: false,
    },
    {
        title: 'Mee Bazaar',
        desc: '',
        img: MebzrLogo,
        url: '',
        skills: ['HTML', 'CSS', 'JS', 'React Js', 'React Native'],
        isWeb: true,
        isMobile: true,
        isXR: false,
        isUE: false,
        isThree: false,
    },
    {
        title: 'Split Deals',
        desc: '',
        img: SdlLogo,
        url: '',
        skills: ['HTML', 'CSS', 'JS', 'React Js'],
        isWeb: true,
        isMobile: false,
        isXR: false,
        isUE: false,
        isThree: false,
    },
    {
        title: 'Linview',
        desc: '',
        img: LinvLogo,
        url: '',
        skills: ['HTML', 'CSS', 'JS', 'React Js', 'Kibana'],
        isWeb: true,
        isMobile: false,
        isXR: false,
        isUE: false,
        isThree: false,
    },
    {
        title: 'PlugXR',
        desc: '',
        img: PlugxrLogo,
        url: '',
        skills: ['HTML', 'CSS', 'JS', 'React Js', 'Three Js'],
        isWeb: true,
        isMobile: false,
        isXR: false,
        isUE: false,
        isThree: true,
    },
    {
        title: 'ATUM Life',
        desc: '',
        img: AtumLogo,
        url: '',
        skills: ['HTML', 'CSS', 'JS', 'React Js', 'React Native'],
        isWeb: true,
        isMobile: true,
        isXR: false,
        isUE: false,
        isThree: false,
    },
    {
        title: 'Telangana Nijam',
        desc: '',
        img: TnijamLogo,
        url: '',
        skills: ['HTML', 'CSS', 'JS', 'React Js'],
        isWeb: true,
        isMobile: false,
        isXR: false,
        isUE: false,
        isThree: false,
    },
    {
        title: 'Coin Hunter Game',
        desc: '',
        img: CoingLogo,
        url: '',
        skills: ['Unreal Engine'],
        isWeb: false,
        isMobile: false,
        isXR: false,
        isUE: true,
        isThree: false,
    },
    // {
    //     title: 'Telangana Nijam',
    //     desc: '',
    //     img: TnijamLogo,
    //     url: '',
    //     skills: ['HTML', 'CSS', 'JS', 'React Js'],
    //     isWeb: true,
    //     isMobile: false,
    //     isXR: false,
    //     isUE: false,
    //     isThree: false,
    // },
];

export const skils = ['All', 'React Js', 'React Native', 'Three Js', 'XR', 'Unreal Engine', 'Unity'];

const Project = () => {
    const [sel, setSel] = useState('All');

    const handleSel = (it) => {
        if(sel===it){
            setSel('All');
        }else{
            setSel(it);
        };
    };

    const handleArr = (it) => {
        switch(sel){
            case 'React Js':
                return it.filter((itm) => itm.isWeb===true);
            case 'React Native':
                return it.filter((itm) => itm.isMobile===true);
            case 'Three Js':
                return it.filter((itm) => itm.isThree===true);
            case 'XR':
                return it.filter((itm) => itm.isXR===true);
            case 'Unreal Engine':
                return it.filter((itm) => itm.isUE===true);
            default:
                return it;
        };
    };

    return (
        <section>
            <div className='dflex' style={{margin: '2%'}}>
                {skils.map((it, idx) => <div className='btn_tab' key={idx} onClick={() => handleSel(it)}>{it}</div>)}
            </div>

            <div className='dflex container'>
                <Row>
                    {handleArr(data).map((itm, idx, arr) =>
                        <Col key={idx} xs={12} sm={6} md={arr.length>2 ? 4 : 12}>
                            <Card style={{minHeight: '24vh', margin: 8}}>
                                <Card.Img 
                                    variant="top" src={itm.img} 
                                    style={{
                                        height: '20vh', borderRadius: 5, 
                                        borderBottom: '1.5px dashed #fff',
                                    }} 
                                />

                                <Card.Body>
                                    <Card.Title 
                                        style={{fontSize: '30px', textAlign: 'center'}}
                                    >
                                        {itm.title}
                                    </Card.Title>

                                    <Card.Text style={{textAlign: 'center'}}>
                                        {itm.skills.map((it, id) => 
                                            <Badge 
                                                key={id} bg="dark" 
                                                style={{fontSize: '16px', marginLeft: 4}}
                                            >
                                                {it}
                                            </Badge>
                                        )}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </div>
        </section>
    );
};

export default Project;