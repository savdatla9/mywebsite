import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Button, Image } from 'react-bootstrap';
import { TbMapSearch } from "react-icons/tb";
import axios from 'axios';

import { WEATHERAPI, WAKEY } from '../../apis';

const WeatherPage = () => {
    const [loc, setLoc] = useState('');
    const [wdata, setWData] = useState('');

    const getWeather = () => {
        let url = `${WEATHERAPI}weather?q=${loc===''?'hyderabad,india':loc}&units=metric&APPID=${WAKEY}`;

        axios.get(url)
        .then((res) => {
            console.log(res.data);
            setWData(res.data); setLoc('');
        }).catch((err) => {
            console.log(err);
        });
    };

    useEffect(() => {
        let url = `${WEATHERAPI}weather?q=hyderabad,india&units=metric&APPID=${WAKEY}`;

        axios.get(url)
        .then((res) => {
            console.log(res.data);
            setWData(res.data); setLoc('');
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <div style={{textAlign: 'center'}}>
            <h1 style={{textDecorationLine: 'underline'}}>Weather</h1>

            <Form style={{ padding: '1.5%', display: 'flex', justifyContent: 'center' }}>
                <Row xs={6}>
                    <Col style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Form.Control
                            value={loc} placeholder='Search Location' 
                            onChange={(e) => setLoc(e.target.value)}
                            style={{color: 'dodgerblue', width: '250px', marginRight: '7.5px', fontSize: '20px' }} 
                        />
                    
                        <Button    
                            variant="outline-primary" outline onClick={() => getWeather()}
                            style={{display: 'flex', justifyContent: 'space-between', fontSize: 20}}
                        >
                            Search&nbsp;<TbMapSearch style={{fontSize: '27px'}} /> 
                        </Button>
                    </Col>
                </Row>
            </Form>

            <div style={{marginTop: '2.5vh', fontSize: '25px'}}>Weather Location</div>
            <div style={{marginTop: '0.5vh', fontSize: '35px', fontWeight: '800'}}>{wdata.name}</div>

            {typeof wdata.main !== "undefined" ? <div className='WHigh' style={{marginTop: '5.5vh', borderRadius: '20px', padding: '5px', backgroundColor: '#00000015'}}>
                <div style={{paddingTop: '5px', fontSize: '50px', fontWeight: '700'}}>
                    {wdata.main.temp} <sup>o</sup>C
                </div>

                <Image src={`https://openweathermap.org/img/wn/${wdata.weather[0].icon}@4x.png`} />

                <p>
                    <span style={{fontSize: '45px', fontWeight: 'bold'}}>{wdata.weather[0].main}</span><br />
                    <span style={{fontSize: '25px'}}>{wdata.weather[0].description}</span>
                </p>
 
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
                    <div>
                        <span style={{fontWeight: 'bold', fontSize: '45px'}}>{wdata.wind.speed}</span>
                        <br /> 
                        <span style={{fontWeight: 'lighter', fontSize: '25px'}}>Wind Speed</span>
                    </div>

                    <div>
                        <span style={{fontWeight: 'bold', fontSize: '45px'}}>{wdata.main.humidity}</span>
                        <br /> 
                        <span style={{fontWeight: 'lighter', fontSize: '25px'}}>Humid</span>
                    </div>
                </div>
            </div> : ''}
        </div>
    );
};

export default WeatherPage;