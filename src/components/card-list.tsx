import React, { useEffect, useState } from 'react';
import Card from './card';

const CardList = () => {

    const [info, setInfo] = useState<any[]>([]);

    useEffect(() => {
        getInfo();

    }, []);

    const getInfo = async () => {
        const base_url = 'https://api.thedogapi.com/v1/breeds?limit=100'
        const response = await fetch(base_url);
        const data = await response.json();
        console.log(data);
        setInfo(data);
    }

    return (
        <main>
            <div className='container'>
                <div className='row '>
                    {info.map(noun => (<div className='col d-flex justify-content-center'>
                                        <Card key={noun.id} {...noun} />
                                      </div>))}
                </div>
            </div>
        </main>
    )
}

export default CardList;