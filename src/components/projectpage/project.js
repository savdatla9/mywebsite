import React, { useState, useEffect } from 'react';
import { 
    Card, Row, Col, 
    Badge, Button 
} from 'react-bootstrap';
import axios from 'axios';

import { RANDOMAPI, GA_AKEY } from '../../apis';

import WLogo from '../assets/weather.png';
import LinvLogo from '../assets/linview.jpg';
import AtumLogo from '../assets/atumlife.jpg';
import GiftLogo from '../assets/gifteria.png';
import PlugxrLogo from '../assets/plugxr.jpg';
import SdlLogo from '../assets/splitdeals.png';
import MebzrLogo from '../assets/meebazaar.jpg';
import CoingLogo from '../assets/coinhunter.png';
import WXRLogo from '../assets/webxr-markerless.jpg';
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
        isUnity: false,
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
        isUnity: false,
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
        isUnity: false,
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
        isUnity: false,
    },
    {
        title: 'PlugXR',
        desc: '',
        img: PlugxrLogo,
        url: 'https://creator.plugxr.com/login',
        skills: ['HTML', 'CSS', 'JS', 'React Js', 'Three Js'],
        isWeb: true,
        isMobile: false,
        isXR: false,
        isUE: false,
        isThree: true,
        isUnity: false,
    },
    {
        title: 'ATUM Life',
        desc: '',
        img: AtumLogo,
        url: 'https://atumlife.com/home',
        skills: ['HTML', 'CSS', 'JS', 'React Js', 'React Native'],
        isWeb: true,
        isMobile: true,
        isXR: false,
        isUE: false,
        isThree: false,
        isUnity: false,
    },
    {
        title: 'Telangana Nijam',
        desc: '',
        img: TnijamLogo,
        url: 'https://epaper.telangananijam.com/',
        skills: ['HTML', 'CSS', 'JS', 'React Js'],
        isWeb: true,
        isMobile: false,
        isXR: false,
        isUE: false,
        isThree: false,
        isUnity: false,
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
        isUnity: false,
    },
    {
        title: 'Image Gallery',
        desc: '',
        img: null,
        url: 'Gallery',
        skills: ['HTML', 'CSS', 'JS', 'React Js'],
        isWeb: true,
        isMobile: false,
        isXR: false,
        isUE: false,
        isThree: false,
        isUnity: false,
    },
    {
        title: 'Weather Forecast',
        desc: '',
        img: WLogo,
        url: 'Weather',
        skills: ['HTML', 'CSS', 'JS', 'React Js'],
        isWeb: true,
        isMobile: false,
        isXR: false,
        isUE: false,
        isThree: false,
        isUnity: false,
    },
    {
        title: 'WebXR - Markerless',
        desc: '',
        img: WXRLogo,
        url: 'WebXR/Surface',
        skills: ['HTML', 'CSS', 'React Js', 'Three Js', 'WebXR'],
        isWeb: true,
        isMobile: false,
        isXR: true,
        isUE: false,
        isThree: true,
        isUnity: false,
    },
];

export const skils = [
    'All', 'React Js', 'React Native', 
    'Three Js', 'XR', 'Unreal Engine', 
    // 'Unity',
];

const Project = () => {
    const [sel, setSel] = useState('All');
    const [imgs, setImgs] = useState(null);

    const handleSel = (it) => {
        setSel(it);
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
            case 'Unity':
                console.log(it.filter((itm) => itm.isUnity===true));
                return it.filter((itm) => itm.isUnity===true);
            default:
                return it;
        };
    };

    useEffect(() => {
        document.title = 'Projects...';

        const url = `${RANDOMAPI}?client_id=${GA_AKEY}`;
        
        axios.get(url)
        .then((res) => {
            // console.log(res.data.urls.regular);
            setImgs(res.data.urls.small);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <section>
            <div className='dflex' style={{margin: '2%'}}>
                {skils.map((it, idx) => <div 
                    className='btn_tab' key={idx} onClick={() => handleSel(it)}
                >
                  {it}
                </div>)}
            </div>

            <div className='dflex container'>
                <Row>
                    {handleArr(data).map((itm, idx, arr) => <Col 
                        key={idx} xs={12} sm={6} 
                        md={arr.length>=2 ? 4 : 12} 
                        lg={arr.length>=2 ? 3 : 8}
                    >
                        <Card style={{minHeight: '24vh', margin: '10px 4px'}}>
                            <Card.Img 
                                variant="top" src={itm.img!==null ? itm.img : imgs} 
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

                                <div style={{textAlign: 'center', marginTop: -2}}>
                                    {itm.url!=='' && <Button 
                                        style={{
                                            color: 'dodgerblue', textDecorationLine: 'none'
                                        }}
                                        variant="link" href={itm.url} 
                                        target={itm.url[0]==='h' ? 'blank': ''}
                                    >
                                        Live Link
                                    </Button>}
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>)}
                </Row>
            </div>
        </section>
    );
};

export default Project;