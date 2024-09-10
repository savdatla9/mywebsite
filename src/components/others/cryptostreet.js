import React, { useState, useEffect } from 'react';

import { DataView } from 'primereact/dataview';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { FaRegEye } from "react-icons/fa6";
import { Row, Col } from 'reactstrap';
import { Image } from 'react-bootstrap';

import axios from 'axios';

import { CMKEY, CRYPTOMRKT } from '../../apis';

const CryptoIndex = () => {
    const [clist, setCList] = useState([]);
    const [newslist, setNList] = useState([]);
    const [view, setView] = useState('');
    const [open, setOpen] = useState(false);
    const [load, setLoad] = useState(false);

    const viewCrypto = (id) => {
        let url = `${CRYPTOMRKT}coins/${id}?currency=INR`;

        setLoad(true);

        axios.get(url, { 
            headers: {
                'X-API-KEY': CMKEY, 
                'accept': 'application/json'
            }
        }).then((res) => {
            setView(res.data); setOpen(true);
        }).catch((err) => {
            console.log(err);
        });
    };

    useEffect(() => {
        let url = `${CRYPTOMRKT}coins?page=1&limit=1000&currency=INR`, 
            news = `${CRYPTOMRKT}news?page=1&limit=20`;

        setLoad(true);

        axios.get(url, { 
            headers: {
                'X-API-KEY': CMKEY, 
                'accept': 'application/json'
            }
        }).then((res) => {
            setCList(res.data.result); setLoad(false);
        }).catch((err) => {
            console.log(err);
        });

        axios.get(news, { 
            headers: {
                'X-API-KEY': CMKEY, 
                'accept': 'application/json'
            }
        }).then((res) => {
            setNList(res.data.result); setLoad(false);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    const viewMore = (rowData) => {
        return <FaRegEye onClick={() => viewCrypto(rowData.id)} key={rowData.id} />
    };

    const currencyBody = (row) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR'
        }).format(parseFloat(row.price));
    };
    
    const newsLayout = (product) => {
        return(
            <Col xs={12} sm={6} md={3} key={product.id}>
                <div style={{border: '1px dotted #ccc', borderRadius: '15px', margin: '5px'}}>
                    <div style={{fontSize: '20px', fontWeight: '700'}}>{product.source}</div>

                    <div>
                        <img src={product.imgUrl} alt={product.id} style={{width: '275px', height: 'auto', margin: '15px', borderRadius: '15px'}} />
                        <div>{product.title}</div>
                    </div>

                    <div>
                        <a href={product.link} target='blank' style={{fontSize: '18px', color: 'dodgerblue', textDecorationLine: 'none'}}>More Info</a>
                    </div>
                </div>
            </Col>
        );
    };

    const itemTemplate = (product, layout) => {
        if (!product) {
            return;
        }

        if(layout === 'grid') return newsLayout(product);
    };

    const listTemplate = (products, layout) => {
        return <Row style={{padding: '5px'}}>{products.map((product) => itemTemplate(product, layout))}</Row>;
    };

    return (
        <div style={{textAlign: 'center'}}>
            <h1 style={{textDecorationLine: 'underline'}}>CryptoIndex</h1>

            <DataTable 
                value={clist} stripedRows paginator rows={10} removableSort loading={load}
                sortMode="multiple" dataKey="id" scrollable scrollHeight="420px" 
                rowsPerPageOptions={[10, 50, 100, 150, 250, 500]}
            >
                <Column field="rank" header="Rank" sortable></Column>
                <Column field="name" header="Name" sortable></Column>
                <Column field="symbol" header="Symbol" sortable></Column>
                <Column field="price" header="Price" body={currencyBody}></Column>
                <Column header="Details" body={viewMore}></Column>
            </DataTable>


            <h4>News</h4>
            <DataView value={newslist} listTemplate={listTemplate} layout={'grid'} paginator rows={4} />

            <Dialog header={<div style={{textAlign: 'center'}}>Crypto Info - {view.name}</div>} visible={open} style={{ width: '50vw', height: 'auto' }} onHide={() => { setOpen(false); setView(''); setLoad(false) }}>
               <Row>
                    <Col xs={4} style={{textAlign: 'center'}}>
                        <Image src={view.icon} roundedCircle style={{width: '100px', height: 'auto'}} />
                    </Col>

                    <Col xs={8}>
                        <Col xs={12} style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px'}}>
                            {view.name}
                        </Col>

                        <Col xs={12} style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px'}}>
                            Symbol - {view.symbol}
                        </Col>

                        <Col xs={12} style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px'}}>
                            Currency - {new Intl.NumberFormat('en-IN', {
                                style: 'currency',
                                currency: 'INR'
                            }).format(parseFloat(view.price))}
                        </Col>

                        <Col xs={12} style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px'}}>
                            Reddit - <a href={view.redditUrl} target='blank'>{view.redditUrl}</a>
                        </Col>

                        <Col xs={12} style={{fontSize: '20px', fontWeight: 600}}>
                            Link - <a href={view.websiteUrl} target='blank'>{view.websiteUrl}</a>
                        </Col>
                    </Col>
               </Row>
            </Dialog>
        </div>
    );
};

export default CryptoIndex;