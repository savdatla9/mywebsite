import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Form, Button, Pagination } from 'react-bootstrap';

import { BsDownload } from "react-icons/bs";
import { MdImageSearch } from "react-icons/md";

import { GALLERYAPI, SEARCHGALLERYAPI, GA_AKEY } from '../../apis';


const ImgPage = () => {
    const [imgList, setIList] = useState([]);
    const [loadPage, setLPage] = useState(1);
    const [last, setLast] = useState(200);
    const [perPage, setPPage] = useState(9);
    const [search, setSearch] = useState('');

// `https://api.unsplash.com/search/photos?page=${loadPage}&query=${search}&client_id=${}&per_page=`

    async function searchImgs() {
        if(search.length){
            setIList([]); setLPage(1);

            const url = `${SEARCHGALLERYAPI}${loadPage}&query=${search}&per_page=${perPage}&order_by=popular&client_id=${GA_AKEY}`;
    
            try {
                const response = await fetch(url);
    
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                };
            
                const res = await response.json();
    
                setIList(res.results); setLast(res.total_pages);
            } catch (error) {
                console.error(error.message);
            };
        }else{
            getImgs();
        };  
    };

    async function getImgs() {
        const url = `${GALLERYAPI}${loadPage}&per_page=${perPage}&order_by=popular&client_id=${GA_AKEY}`;

        setSearch(''); setLPage(1);

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            };
        
            const res = await response.json();

            setIList(res); setLast(200);
        } catch (error) {
            console.error(error.message);
        };
    };

    async function loadMore(page) {
        if(page>=1){
            const url = `${GALLERYAPI}${page}&per_page=${perPage}&order_by=popular&client_id=${GA_AKEY}`;

            try {
                const response = await fetch(url);
    
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                };
            
                const res = await response.json();
    
                setIList(res);
            } catch (error) {
                console.error(error.message);
            };

            setLPage(page);
        }else{
            setLPage(1);
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
        const url = `${GALLERYAPI}${loadPage}&per_page=${perPage}&order_by=popular&client_id=${GA_AKEY}`;

        setSearch(''); setLPage(1);
        
        axios.get(url)
        .then((res) => {
            setIList(res.data); setLast(200);
        }).catch((err) => {
            console.log(err);
        }) 
    }, []);
    
    return (
        <div style={{width: '100%', textAlign: 'center'}}>
            <h1 style={{textDecorationLine: 'underline'}}>Gallery</h1>

            <Form style={{ padding: '1.5%', display: 'flex', justifyContent: 'center' }}>
                <Row xs={6}>
                    <Col style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Form.Control
                            value={search} placeholder='Search Category' 
                            onChange={(e) => setSearch(e.target.value)}
                            style={{color: 'dodgerblue', width: '250px', marginRight: '7.5px', fontSize: '20px' }} 
                        />
                    
                        <Button    
                            variant="outline-primary" outline onClick={() => searchImgs()}
                            style={{display: 'flex', justifyContent: 'space-between', fontSize: 20}}
                        >
                            Search&nbsp;<MdImageSearch style={{fontSize: '27px'}} /> 
                        </Button>
                    </Col>
                </Row>
            </Form>

            <Container>
                <Row xs={12} sm={4} md={3}>
                    {imgList.length>=1 && imgList.map((it) => 
                        <Col key={it.id}>
                            <Card className='backHigh' style={{margin: '3.5px', backgroundColor: 'transparent', color: '#fff', border: '2px solid #ccc', marginBottom: '2vh'}}>
                                <Card.Img variant="top" src={it.urls.small ? it.urls.small : null} style={{width: '100%', height: '250px'}} />

                                <Card.Body style={{padding: '5px', border: '1px dotted #ccc'}}>
                                    <Card.Title style={{
                                        fontSize: '25px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'
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

                {search==='' && <Col style={{display: 'flex', justifyContent: 'center', marginTop: '2.5%'}}>
                    <Pagination size='lg' style={{marginRight: '5px'}}>
                        <Pagination.First onClick={() => loadMore(1)} />
                        <Pagination.Prev onClick={() => loadMore(loadPage-1)} />
                        <Pagination.Item>{loadPage}</Pagination.Item>
                        <Pagination.Next onClick={() => loadMore(loadPage+1)} />
                        <Pagination.Last onClick={() => loadMore(last)} />
                    </Pagination>

                    <Form.Select 
                        value={perPage} onChange={(e) => {setPPage(e.target.value); getImgs()}}
                        style={{backgroundColor: 'transparent', color: 'dodgerblue', width: '75px', height: '55px', marginLeft: '5px', fontSize: '20px', textAlign: 'center' }}
                    >
                        <option>-</option>
                        <option value={9}>10</option>
                        <option value={15}>15</option>
                        <option value={30}>30</option>
                    </Form.Select>
                </Col>}
            </Container>
        </div>
    );
};

export default ImgPage;