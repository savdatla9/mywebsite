import React, { useState, useEffect } from 'react';
// import { Button } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import { NEWSAPI, APIKEY } from '../../apis';

const NewsPage = () => {
    const [newsList, setNList] = useState([]);

    async function getNews() {
        const url = `${NEWSAPI}top-headlines?country=in&${APIKEY}`

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            };
        
            const json = await response.json();

            setNList(json.articles);
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
        getNews();
    }, [newsList.length]);

    return (
        <div style={{textAlign: 'center'}}>
            <h1 style={{textDecorationLine: 'underline'}}>News Articles</h1>

            {newsList.length>=1 && newsList.map((it, idx) => <div key={idx} style={{color: '#ccc', padding: '5px'}}>
                <div style={{fontWeight: '18px'}}>
                    {it.title}

                    &nbsp;on&nbsp;<span style={{fontWeight: 'lighter'}}>
                        {getDateChng(it.publishedAt)}
                    </span>

                    <div style={{padding: '5px'}}>
                        <Button 
                            variant="outline-primary" size="lg"
                            outline href={it.url} target='blank'
                        >
                            More Info
                        </Button>
                    </div>
                </div>

                {newsList.length-1!==idx && <div style={{border: '1px dashed #fff', width: '50%', marginLeft: '25%'}}></div>}
            </div>)}
        </div>
    );
};

export default NewsPage;