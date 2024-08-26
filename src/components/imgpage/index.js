import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import { BsDownload } from "react-icons/bs";

import { GALLERYAPI, GA_AKEY } from '../../apis';

const ImgPage = () => {
    const [imgList, setIList] = useState([]);
    async function getImgs() {
        const url = `${GALLERYAPI}1&per_page=25&order_by=popular&client_id=${GA_AKEY}`

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            };
        
            const res = await response.json();

            console.log(res); setIList(res);
        } catch (error) {
            console.error(error.message);
        };
    };

    const getDateChng = (dt) => {
        const today = new Date(dt);
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; 
        let dd = today.getDate();
        
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        
        return dd + '/' + mm + '/' + yyyy;
    };

    useEffect(() => {
        getImgs();
    }, []);
    
    return (
        <div style={{width: '100%'}}>
            <h2 style={{textAlign: 'center'}}>Gallery</h2>

            <Container>
                <Row xs={12} sm={4} md={3}>
                    {imgList.length>=1 && imgList.map((it) => 
                        <Col key={it.id}>
                            <Card style={{margin: '3.5px', backgroundColor: 'transparent', color: '#fff', borderColor: '#ccc'}}>
                                <Card.Img variant="top" src={it.urls.small} style={{width: '100%', height: '250px'}} />

                                <Card.Body style={{padding: '5px'}}>
                                    <Card.Title style={{fontSize: '25px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'
                                    }}>
                                        <div>{it.user.name}</div>

                                        <Card.Link href={it.links.download} target='blank'>
                                            <BsDownload />
                                        </Card.Link>
                                    </Card.Title>

                                    <Card.Text style={{fontSize: '14px'}}>
                                        <div>{it.alt_description}</div>

                                        <div>{getDateChng(it.created_at)}</div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default ImgPage;